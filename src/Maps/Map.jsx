import React from 'react';
import {GoogleMap,
       withScriptjs,
       withGoogleMap,
       Marker} from 'react-google-maps'
import credentials from "../APIs/credentials"
import MapStyle from './MapStyle';

function Map(){

    return(
         <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat:4.6381938, lng:-74.08404639999999}}
            defaultOptions={{styles: MapStyle}}
         />
    )
}

const WrappledMap = withScriptjs(withGoogleMap(Map));
export default  WrappledMap
