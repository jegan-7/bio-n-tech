import React from "react";
import { useLocation } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  const location = useLocation();
//   const isAuthenticated = useIsAuthenticated();

//   const isLoginPage = location.pathname === "/login";
//   const showLayout = isAuthenticated && !isLoginPage;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#252632" }}>
     <Navbar />
      <Sidebar>{children}</Sidebar>
    </div>
  );
  // return (
  //     <div style={{ minHeight: "100vh", backgroundColor: "#252632" }}>
  //       <Navbar />
  //       <Sidebar>

  //         {children}
  //      </Sidebar>
  //     </div>
  //   );
};

export default AppLayout;
