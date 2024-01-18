"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const MapComponent = () => {
  const mapStyles = {
    width: "100%",
    height: "32rem",
  };

  const mapCenter = { lat: 0, lng: 0 };
  const customMapOptions = {
    gestureHandling: "none", // Disables pan and zoom gestures
    zoomControl: true, // Hides the default zoom control
  };

  return (
    <div className="App h-40 md:h-64">
      <LoadScript googleMapsApiKey="AIzaSyCzY9tZOG_WWaevgILldDIPhwEeMfMY0zk">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={1}
          center={mapCenter}
          options={{ ...customMapOptions, mapTypeId: "satellite" }}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
//////
