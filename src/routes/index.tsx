import {
  Routes,
  Route,
} from "react-router-dom";

import {
  DashboardPage,
} from "@/pages/Dashboard";

import {
  ProductsPage,
} from "@/pages/Products";

import {
  AdminLayout,
} from "@/components/layout/AdminLayout";


export function AppRoutes() {

  return (

    <Routes>

      <Route
        element={<AdminLayout />}
      >

        <Route
          path="/"
          element={<DashboardPage />}
        />


        <Route
          path="/products"
          element={<ProductsPage />}
        />

      </Route>

    </Routes>

  );
}