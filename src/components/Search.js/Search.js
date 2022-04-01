// import React, { useState, useCallback} from 'react';
// import mapRef from '../MapView/MapView';
// import Locate from '../MapView/Locate';
// import usePlacesAutocomplete, {getGeocode, getLatLng,} from 'use-places-autocomplete';
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxOption} from '@reach/combobox';
// import '@reach/combobox/styles.css'
// import './Search.css';

// const Search = () => {

//     const{
//         ready, 
//         value, 
//         suggestions: {status, data}, 
//         setValue,
//         clearSuggestions,
//     } = usePlacesAutocomplete({
//         requestOptions:{
//             location: {lat:() => 41.902782, lng: ()=> 12.496365},
//             radius: 200 * 1000,
//         }
//     })


//     //Reposition the Map
//     const panTo = useCallback(({lat, lng}) => {
//         mapRef.current.panTo({lat, lng})
//         mapRef.current.setZoom(14)
//     }, []);

//     const handleInput = (e) => {
//         setValue(e.target.value)
//     }

//    const handleSelect = async (address) => {
//        setValue(address, false)
//        clearSuggestions()
//         try{
//             const results = await getGeocode({ address })
//             const {lat, lng} = await getLatLng(results[0])
//             panTo({lat, lng});
//         }catch(error) {
//             console.log("error");
//         }  
//     }

//     return(
//     <div className="search">
//         <Locate/>
//         <Combobox onSelect={handleSelect}/>
//             <ComboboxInput value={value} onChange={handleInput} disabled={!ready} placeholder="Enter a location"/>
//             {/* To Show results */}
//             <ComboboxPopover>
//                 {/* <ComboboxList> */}
//                 {status === "OK" && data.map(({id, description}) => (
//                 <ComboboxOption key={id} value={description}/> 
//                 ))}
//                 {/* </ComboboxList> */}
//             </ComboboxPopover>
//     </div>
//     );
// }

// export default Search;