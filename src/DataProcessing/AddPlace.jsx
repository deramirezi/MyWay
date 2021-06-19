import React,{ useState} from 'react';
import axios from 'axios';
import credentials from "../APIs/credentials"
import usePlacesAutocomplete,{ 
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete'
import PlacesAutocomplete from 'react-places-autocomplete';
import {useAuth} from '../Context/AuthContext'

function AddPlace() {

    const [address, setAddress] = useState(' ')
    const [coordinates, setCoordinates] = useState({lat:null, lng:null})
    const [timeStay, setTimeStay] = useState()
    const {user} = useAuth()

    const clearinput = () => {
        setAddress(' ');
        setTimeStay(0);
    }

    const handleSelect = async (value) => {
        const result = await geocodeByAddress(value);
        const latlng = await getLatLng(result[0]);
        setAddress(value);
        setCoordinates(latlng)
    }

    const handleSubmit = (event) =>{

        event.preventDefault()
        
        const infoload ={
           username: user.email,
           placeName: address,
           placelat: coordinates.lat,
           placelng: coordinates.lng,
           placeDuration: timeStay
        }

        axios({
            url:'/api/save',
            method: 'POST',
            data:infoload
        }).then(()=>{
            console.log("Data Upload")
            clearinput()
        })
          .catch(()=>{
              console.log("Data Error")
            })
    }


return(
    <div>
        <h1>Add New Place</h1>
        <PlacesAutocomplete 
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}>
        {
        ({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
            <div>
            <p>Latitude:{coordinates.lat}</p> 
            <p>Longitude:{coordinates.lng}</p> 
            <input {...getInputProps({placeholder: "Type Place"})}/>
            <div>
               {loading ? <p>...Loading</p> : null}   
               {suggestions.map((suggestion)=>{
                   const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                   };
                   return( 
                   <div {...getSuggestionItemProps(suggestion, {style})}>
                       {suggestion.description}
                    </div>
                   );
               })} 
            </div>
            </div> 
                  
        )
        }

        </PlacesAutocomplete>
        <input type="text" 
                placeholder = "Time in this place"
                name="ruteInputName"
                onChange={e=>{setTimeStay(e.target.value)}}/>
        <button onClick={handleSubmit}> Create Route</button>
        </div>
    )
}

export default AddPlace

