import React, { useEffect, useState } from "react";
import {GoogleMap,
       withScriptjs,
       withGoogleMap,
       Marker} from 'react-google-maps'
import credentials from "../APIs/credentials"
import MapStyle from './MapStyle';

function Map(){

 
    const fetchData = async () => {
        const response = await fetch("https://7o6x7arc9k.execute-api.us-east-2.amazonaws.com/Dev");
        const json = await response.json();
        setState(json);
    };
 
    useEffect(() => {
        setTimeout(fetchData, 1000)
    })
    
    const [state, setState] = useState([]);
    let Counter = 0;

    return(
        
        <>
         {
         state.map(item =>{
             if(Counter === 0){
                 let Latitud = item.payload.Latitude
                 let Longitud = item.payload.Longitud
                 const Focus = {lat:Latitud,lng:Longitud}
                 Counter = Counter + 1
                 return(
                <GoogleMap
                    defaultZoom={17}
                    defaultCenter={Focus}
                    defaultOptions={{styles: MapStyle}}
                >
                {state.map(item =>{
                    while(true){
                    let Latitud = item.payload.Latitude
                    let Longitud = item.payload.Longitud
                    const Focus = {lat:Latitud,lng:Longitud}
                    return(
                        <Marker position={Focus}/>
                    )
                }
                }
                )
                
                }
                </GoogleMap>
                
                 )
              }
            }
           )
         }
         
         </>
    )
}

const WrappledMap = withScriptjs(withGoogleMap(Map));
export default  WrappledMap
