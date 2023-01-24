import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

const AddressAuto = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    const currentGeo = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(currentGeo);
  };

  return (
    <div>
      <p>
        <span
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#20467e",
          }}
        >
          Address:
        </span>
        {address}
      </p>
      <p>
        <span
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#20467e",
          }}
        >
          Latitude:
        </span>{" "}
        {coordinates.lat} ,{" "}
        <span
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#20467e",
          }}
        >
          Longitude:
        </span>{" "}
        {coordinates.lng}
      </p>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div key={suggestions.description}>
            <input
              {...getInputProps({
                placeholder: "🏡 Search Address ... ",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";

                const style = suggestion.active
                  ? {
                      backgroundColor: "#d3d3d3d3",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }
                  : {
                      backgroundColor: "white",
                      cursor: "pointer",
                      fontSize: "1rem",
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span style={{ fontSize: "1rem" }}>
                      {suggestion.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default AddressAuto;
