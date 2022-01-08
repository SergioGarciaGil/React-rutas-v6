import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import AboutPage from "./pages/AboutPages";
import UsersPages from "./pages/UsersPages";
import NotFoundPages from "./pages/NotFoundPages";
import NavBar from "./components/NavBar";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPages />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />
        {/* creamos una ruta  por medio de un hook y adicional creamos otra subruta de la pagina dashboardcon nombre welcome */}
        {/* El arterisco despues del la ruta dasboarh es para indicar que hay una subruta */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome!!!</p>} />
          <Route path="goodbay" element={<p>Good Bay!!!</p>} />
        </Route>

        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </BrowserRouter>
  );
}
