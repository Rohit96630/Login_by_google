import GoogleMapReact from "google-map-react";
import "../assets/css/Home.css";
import { Marker } from "react-google-maps";

const AnyReactComponent = ({ text, lat, lng }) => (
  <div className="city_in_map">
    <div>Latitude: {lat}</div>
    <div>Longitude: {lng}</div>
    <div>{text}</div>
  </div>
);
const SimpleMap = ({ selectedCity }) => {
  const defaultProps = {
    center: {
      lat: selectedCity?.latitude || 42.46245,
      lng: selectedCity?.longitude || 1.50209,
    },
    zoom: 14,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyANt6ZdUwUNONRSK1_70I3_uDU_hdTYv9Q",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {selectedCity && (
          <AnyReactComponent
            lat={selectedCity.latitude}
            lng={selectedCity.longitude}
            text={selectedCity.city}
          />
        )}
        {selectedCity && (
          <Marker
            lat={selectedCity.lat}
            lng={selectedCity.lng}
            className="color"
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
