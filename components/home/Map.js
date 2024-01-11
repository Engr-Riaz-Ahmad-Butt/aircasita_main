"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const MapComponent = () => {
  const mapStyles = {
    width: "100%",
    height: "60vh",
  };

  const mapCenter = { lat: 0, lng: 0 };
  const customMapOptions = {
    gestureHandling: "none", // Disables pan and zoom gestures
    zoomControl: true, // Hides the default zoom control
  };

  return (
    <div className="App" style={{ height: 300 }}>
      <LoadScript googleMapsApiKey="AIzaSyCzY9tZOG_WWaevgILldDIPhwEeMfMY0zk">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={1}
          center={mapCenter}
          options={{ ...customMapOptions, mapTypeId: "satellite" }}
        >
          {/* {mapVideos
            ?.filter((marker) => marker.UserDetail.Category === "Customers")
            ?.map((filteredMarker) => (
              <Marker
                key={filteredMarker.id}
                position={filteredMarker.position}
                onClick={() => handleMarkerClick(filteredMarker)}
                icon={{
                  url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30" fill="none">
                        <circle cx="10" cy="10" r="9" fill="#F4E110" stroke="black" stroke-width="2"/>
                        <line x1="10" y1="19" x2="10" y2="30" stroke="black" stroke-width="2"/>
                        </svg>
                      `
                  )}`,
                }}
              />
            ))} */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
//////
