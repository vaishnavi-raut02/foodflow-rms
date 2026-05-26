import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import AuthPage from "../pages/auth/AuthPage";
import RestaurantListPage from "../pages/RestaurantListPage";
import RestaurantDetailPage from "../pages/RestaurantDetailPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/restaurants" element={<RestaurantListPage />} />
        <Route
  path="/restaurant/:id"
  element={<RestaurantDetailPage />}
/>
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    
  );
}

export default App;