import React from "react";
import GoogleMapReact from "google-map-react";
import { FaHashtag } from "react-icons/fa";
const map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "dqjslkmdqjdkljsdkl" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);
export default map;
const LocationPin = ({ text }) => (
  <div className="pin">
    <FaHashtag className="w-8 h-8 text-gray-500  p-1" />
    <p className="pin-text">{text}</p>
  </div>
);
