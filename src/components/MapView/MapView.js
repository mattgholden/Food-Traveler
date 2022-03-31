import React, { useCallback, useState, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import mapStyles from "./Mapstyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const options = {
  styles: mapStyles,
  // disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
};

const center = {
  lat: 41.902782, 
  lng: 12.496365,
};

const MapView = () => {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

//Placing map markers
  const onMapClick = useCallback((e) => {
    setMarkers((current) => [...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

//Search bar follows map
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h1>
        Plan your trip, with food in mind!{" "}
        <span role="img" aria-label="fork-plate-and-knife">
           🍽
        </span>
      </h1>

      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
      <Marker 
        key={marker.time.toISOString()} 
        position={{lat: marker.lat, lng: marker.lng}} 
        icon={{
          url:'/utensils-solid.svg',
          scaledSize: new window.google.maps.Size(30,30),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(15,15),
          }}
          onClick = {() => {setSelected(marker);
          }}
      />
      ))}
        {/* Window after choosing a location on the map */}
        {selected ? (
        <InfoWindow position={{lat: selected.lat, lng: selected.lng}} 
          onCloseClick={() => {setSelected(null);}}
        >
          <div>
            <h2>
              <span role="img" aria-label="spaghetti"> 🍝 </span>{" "}
              You want to eat here!
            </h2>
              <p>Saved {formatRelative(selected.time, new Date())}</p>
          </div>
        </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

const Locate = ({ panTo }) => {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <i className={`fa-solid fa-compass ${'locate'}`}></i>
    </button>
  );
}

const Search = ({ panTo }) => {
  const { ready, value, suggestions: { status, data },setValue, clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 41.902782, lng: () => 12.496365 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search for food"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default MapView;

