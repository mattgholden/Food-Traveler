// import React, {useCallback, useState } from 'react'
// import './Locate.css'


// const handleClick = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//         panTo({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         })
//     }, () => null);
// }


// const Locate = () => {
//   return (
//     <div>
//         <button className='locate' onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//         //   (position) => {
//         //     // panTo({
//         //     //   lat: position.coords.latitude,
//         //     //   lng: position.coords.longitude,
//         //     // });
//         //   },
//         //   () => null
//         );
//       }}></button>
//         <button><i className={`fa-solid fa-compass ${'locate'}`}></i></button>
//     </div>
//   )
// }

// export default Locate
