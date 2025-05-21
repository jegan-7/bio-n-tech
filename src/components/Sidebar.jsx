// // import React, { useState } from 'react';
// // import { MdOutlineDashboard } from "react-icons/md";
// // import { FaFileAlt, FaUserAlt, FaCog } from "react-icons/fa";
// // import { NavLink } from 'react-router-dom';
// // import logo from '../assets/bnt-logo--colored (1).svg';
// // import './Sidebar.css';

// // const Sidebar = ({ children }) => {
// //     const [isOpen, setIsOpen] = useState(true); // Sidebar initially open
// //     const toggle = () => setIsOpen(!isOpen);

// //     const menuItems = [
// //         {
// //             path: "/dashboard",
// //             name: "Dashboard",
// //             icon: <MdOutlineDashboard />
// //         },
// //     ];

// //     return (
// //         <div className="container">
// //             <div style={{ width: isOpen ? "220px" : "80px" }} className="sidebar d-flex flex-column">
// //                 {/* Logo + Toggle */}
// //                 <div className="top_section d-flex align-items-center justify-content-between p-3">
// //                 {/* <div className="toggle-btn" onClick={toggle}>
// //                         <span>{isOpen ? '◀' : '▶'}</span>
// //                     </div> */}
// //                     <img
// //                         src={logo}
// //                         alt="Biontech Logo"
// //                         style={{ height: "20px" }}
// //                     />
// //                 </div>

// //                 {/* Menu Items */}
// //                 <div className="flex-grow-1 d-flex flex-column mt-3">
// //                     {menuItems.map((item, index) => (
// //                         <NavLink
// //                             to={item.path}
// //                             key={index}
// //                             className={({ isActive }) => "link" + (isActive ? " active" : "")}
// //                         >
// //                             <div className="icon">{item.icon}</div>
// //                             {isOpen && <div className="link_text">{item.name}</div>}
// //                         </NavLink>
// //                     ))}
// //                 </div>
// //             </div>
// //             <main>{children}</main>
// //         </div>
// //     );
// // };

// // export default Sidebar;

// import React, { useState } from 'react';
// import { MdOutlineDashboard } from "react-icons/md";
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/bnt-logo--colored (1).svg';
// import './Sidebar.css';

// const Sidebar = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(true);
//     const toggle = () => setIsOpen(!isOpen);

//     const menuItems = [
//         {
//             path: "/dashboard",
//             name: "Dashboard",
//             icon: <MdOutlineDashboard />
//         },
//     ];

//     return (
//         <div className="container">
//             <div
//                 style={{ width: isOpen ? "220px" : "80px" }}
//                 className={`sidebar d-flex flex-column ${!isOpen ? 'collapsed' : ''}`}
//             >
//                 <div className="top_section d-flex align-items-center justify-content-between p-3">
//                     <img
//                         src={logo}
//                         alt="Biontech Logo"
//                         style={{ height: "20px" }}
//                     />
//                     {/* <button className="toggle-btn ms-auto" onClick={toggle}>
//                         {isOpen ? '◀' : '▶'}
//                     </button> */}
//                 </div>

//                 <div className="flex-grow-1 d-flex flex-column mt-3">
//                     {menuItems.map((item, index) => (
//                         <NavLink
//                             to={item.path}
//                             key={index}
//                             className={({ isActive }) => "link" + (isActive ? " active" : "")}
//                         >
//                             <div className="icon">{item.icon}</div>
//                             {isOpen && <div className="link_text">{item.name}</div>}
//                         </NavLink>
//                     ))}
//                 </div>
//             </div>

//             <main className="main-content">{children}</main>
//         </div>
//     );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import { MdOutlineDashboard } from "react-icons/md";
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/bnt-logo--colored (1).svg';
// import './Sidebar.css';

// const Sidebar = ({ children }) => {
//   const [isOpen] = useState(true);

//   const menuItems = [
//     {
//       path: "/dashboard",
//       name: "Slide Generator for MSL",
//       icon: <MdOutlineDashboard />
//     },
//   ];

//   return (
//     <div className="layout-container">
//       <div className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
//         <div className="top_section p-3">
//         </div>

//         <div className="flex-grow-1 d-flex flex-column mt-3">
//           {menuItems.map((item, index) => (
//             <NavLink
//               to={item.path}
//               key={index}
//               className={({ isActive }) => "link" + (isActive ? " active" : "")}
//             >
//               <div className="icon">{item.icon}</div>
//               {isOpen && <div className="link_text">{item.name}</div>}
//             </NavLink>
//           ))}
//         </div>
//       </div>

//       <div className="main-content">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../assets/bnt-logo--colored (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faDisplay, faMessage } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // Make it toggleable

  const menuItems = [
    {
      path: "/slide-generator",
      name: "Slide Generator for MSL",
      icon: <FontAwesomeIcon icon={faDisplay} />,
    },
    {
      path: "/marketing-message-hub",
      name: "Marketing Message Hub",
      icon: <FontAwesomeIcon icon={faMessage} />,
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="layout-container">
      <div className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
        <div className="top_section p-3"></div>

        <div className="flex-grow-1 d-flex flex-column mt-3">
          {menuItems.map((item, index) => (
            <NavLink
              style={{ margin: "8px" }}
              to={item.path}
              key={index}
              className={({ isActive }) => "link" + (isActive ? " active" : "")}
            >
              <div className="icon">{item.icon}</div>
              {isOpen && <div className="link_text">{item.name}</div>}
            </NavLink>
          ))}
        </div>

        {/* Collapse/Expand Button */}
        <div className="collapse-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpen ? faAnglesLeft : faAnglesRight} />
        </div>
      </div>

      <div className="main-content">{children}</div>
    </div>
  );
};

export default Sidebar;
