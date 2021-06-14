import React,{ useState} from 'react';
import credentials from "../APIs/credentials"
import usePlacesAutocomplete,{ 
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete'
import PlacesAutocomplete from 'react-places-autocomplete';


function AddPlace() {

    const [address, setAddress] = useState(' ')
    const [coordinates, setCoordinates] = useState({lat:null, lng:null})

    const handleSelect = async (value) => {
        const result = await geocodeByAddress(value);
        const latlng = await getLatLng(result[0]);
        setAddress(value);
        setCoordinates(latlng)
    }

return(
    <div>
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
        </div>
    )
}

export default AddPlace

