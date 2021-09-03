import React, { useEffect, useState } from "react";
import {Table} from 'reactstrap';
import WrappledMap from '../Maps/Map'
import credentials from "../APIs/credentials"
import "./DataBase.css"

export default function DataBase() {

  const fetchData = async () => {
    const response = await fetch("https://7o6x7arc9k.execute-api.us-east-2.amazonaws.com/Dev");
    const json = await response.json();
    setState(json);
    Contador = 0;
};

useEffect(() => {
    setTimeout(fetchData, 1000)
})


  const [state, setState] = useState([]);
  let Contador = 0;
  
  return (
    <>
      <div className="WrappledMap">
        <WrappledMap googleMapURL ={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${credentials.mapKey}`}
          loadingElement={<div style={{height: "100%", width: "100%"}}/>}
          containerElement={<div style={{height: "650px", width: "650px"}}/>}
          mapElement={<div style={{height: "100%", width: "100%"}}/>}
       />

      </div>
      <div className = "GeoData">
        <div className = "row">
            <div className = "Data">
               <Table>
                  <thead className="table100-head">
                      <tr>
                         <th> DateTime  </th>
                         <th> Latitude  </th>
                         <th> Longitude </th>
                     </tr>
                  </thead> 
                  <tbody>
                     {state.map((item) => {
                       if(Contador < 12){
                        Contador = Contador + 1; 
                        return(
                          <tr>
                             <td> {item.payload.DateTime} </td>
                             <td> {item.payload.Latitude} </td>
                             <td> {item.payload.Longitud} </td> 
                         </tr>
                          )
                         }
                        }
                      )
                      }
                  </tbody>   
              </Table>
            </div>
          </div>
        </div>
    </>
  );
}


   