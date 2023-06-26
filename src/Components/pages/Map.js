import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const SimpleMap = ({ selectedCity }) => {
  const defaultProps = {
    center: {
      lat: selectedCity?.latitude || 12.9715987,
      lng: selectedCity?.longitude || 77.5945627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCAJWAgNIRBCAYcGED_JSWWquVConUDFXE",
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
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
