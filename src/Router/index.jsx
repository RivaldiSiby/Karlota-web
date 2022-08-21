import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages";
import Login from "../pages/Auth/Login";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Register from "../pages/Auth/Register";

function Router() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              {/* public route */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* public route */}
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </>
  );
}

export default Router;
