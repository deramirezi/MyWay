import React, { Component } from "react";
import { GoogleMap, DistanceMatrixService } from "@react-google-maps/api";

class DistancePlaces extends Component {
  
    state = {
    response: null,
    travelMode: "DRIVING",
    origin: "",
    destination: "",
    };

  distanceCallback = (response) => {

    console.log("Hello");
    console.log(response);

    if (response !== null) {
      if (response.status === "OK") {
        this.setState(() => ({
          response,
        }));
      } else {
        console.log("response: ", response);
      }
    }
  };


  render = () => (
    <div >
        Hola
      <DistanceMatrixService
        options={{
           destinations: [{lat:4.694707999999999, lng:-74.086188},{lat:4.6381938, lng:-74.0840463999999}],
           origins: [{lat:4.6234677, lng:-74.082606},{lat:4.694707999999999, lng:-74.086188}],
           travelMode: "WALKING",
         }}
         callback = {(response) => {console.log(response)}}
       />
    </div>
  );
}

export default DistancePlaces;