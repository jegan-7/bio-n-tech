import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { Store } from './store/Store';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
   </Provider>
  </StrictMode>
);
