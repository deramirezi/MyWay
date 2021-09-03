import React, {useState} from 'react';
import WrappledMap from '../Maps/Map'
import credentials from "../APIs/credentials"
import Navegation from './Navigation'
import DataBase from '../AWS/DataBase'
import './Main.css'

function Main(){
     
    return(
    <>  
      <Navegation/> 
      <DataBase/>
    </> 
    )
}

export default Main

// 

/*
<div className="WrappledMap">
       <WrappledMap googleMapURL ={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${credentials.mapKey}`}
          loadingElement={<div style={{height: "100%"}}/>}
          containerElement={<div style={{height: "100%"}}/>}
          mapElement={<div style={{height: "100%"}}/>}
       />
</div>
*/