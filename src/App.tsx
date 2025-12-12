// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Catalog from "./pages/Dashboard/Catalog";
import Login from "./pages/Login";
import Order from "./pages/Orders/Order";
import GenealogyPlacement from "./pages/Genealogy/GenealogyPlacement";
import BvIncomeEngine from "./pages/BvIncome/BvIncomeEngine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        {/* Protected Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/genealogy" element={<GenealogyPlacement />} />
          <Route path="/bv-income" element={<BvIncomeEngine />} />
          {/* <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
