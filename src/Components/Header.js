import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render () {
    return (
      <div className ="header">
        <h1>Directory</h1>
        <p>Search</p>

      </div>

    )

  }

}




// import React from "react";
// // import "./style.css";
// // import LazyLoad from "react-lazyload";
// // import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// function Header({ name, title, location, phone, email, img }) {
//   return (
//    <div>
//      <h1>
//       <p>

//       </p>
//      </h1>
//    </div>
   
   
//   //  <div className="card-container">
//   //     <div className="card-intro text-color">
//   //       <LazyLoad height="41">
//   //         <img src={img} alt={name} />
//   //       </LazyLoad>
//   //       <h2>{name}</h2>
//   //     </div>
//   //     <hr />
//   //     <div className="card-contact">
//   //       <ul>
//   //         <li>
//   //           <FaMapMarkerAlt />
//   //           <a
//   //             rel="noopener noreferrer"
//   //             target="_blank"
//   //             href={`https://www.google.com/maps/place/${location}`}
//   //           >
//   //             {location}
//   //           </a>
//   //         </li>
//   //         <li>
//   //           <FaPhoneAlt />
//   //           <a href={`tel:${phone}`}>{phone}</a>
//   //         </li>
//   //         <li>
//   //           <FaEnvelope />
//   //           <a href={`mailto:${email}`}>Send Email</a>
//   //         </li>
//   //       </ul>
//   //     </div>
//   //   </div>
//   );
// }

// export default Header;