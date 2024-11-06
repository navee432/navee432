import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import './App.css';
import Usestatesignup from './Component/Usestatesignup';
import Usestatelogin from './Component/Usestatelogin';
import Homepage from './Homepage';
import ProductDetail from './Component/ProductDetail';
import GoogleAuthentication from './Component/GoogleAuthentication';
import { auth } from './firebaseConfig'; 
import CartPage from './Component/CartPage';
import { cartReducer } from './cartReducer';


export const cartcontext = React.createContext();

function App() {
  
  let [cart, dispatch] = useReducer(cartReducer, []);

  // State to track if the user is authenticated
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true); // User is authenticated
      } else {
        setIsAuthenticated(false); // User is not authenticated
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <cartcontext.Provider value={{ cart, dispatch }}>
      <div>
        <BrowserRouter>
          <Routes>
            {/* Redirect root path '/' to '/google-auth' if not authenticated */}
            <Route path="/" element={isAuthenticated ? <Homepage /> : <Navigate to="/google-auth" />} />
            {/* Google Authentication page */}
            <Route path="/google-auth" element={<GoogleAuthentication />} />
            {/* Other routes */}
            <Route path="/Usestatesignup" element={<Usestatesignup />} />
            <Route path="/Usestatelogin" element={<Usestatelogin />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/ProductDetail/:id" element={<ProductDetail />} />
            <Route path='/cartpage' element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </cartcontext.Provider>
  );
}

export default App;
