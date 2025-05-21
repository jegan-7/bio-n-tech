// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import ImportContent from "./pages/ImportContent";
// import AppLayout from "./components/AppLayout";

// const App = () => {
//   return (
//     <div style={{ minHeight: "100vh", backgroundColor: "#252632" }}>
//      <BrowserRouter>
//         {/* <Navbar /> */}
//         <AppLayout>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//           <Routes>
//             <Route path="/import-content" element={<ImportContent />} />
//           </Routes>
//         </AppLayout>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoutes";
import AppLayout from "./components/AppLayout";
import MslSlideGenerator from "./pages/MslSlideGenerator";
import ImportContent from "./pages/ImportContent";
import ContentGeneration from "./pages/ContentGeneration";
import MarketingMessageHub from "./pages/MarketingMessageHub";
import EmailGenerator from "./pages/EmailGenerator";
import EmailGeneratorPreview from "./pages/EmailGeneratorPreview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}

        <Route
          path="/slide-generator"
          element={
            <ProtectedRoute>
              <AppLayout>
                <MslSlideGenerator />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/import-content"
          element={
            <ProtectedRoute>
              <AppLayout>
                <ImportContent />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/content-generation"
          element={
            <ProtectedRoute>
              <AppLayout>
                <ContentGeneration />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/marketing-message-hub"
          element={
            <ProtectedRoute>
              <AppLayout>
                <MarketingMessageHub />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/email-generator"
          element={
            <ProtectedRoute>
              <AppLayout>
                <EmailGenerator />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/email-generator-preview"
          element={
            <ProtectedRoute>
              <AppLayout>
                <EmailGeneratorPreview />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        {/* Default fallback */}
        {/* <Route path="*" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
