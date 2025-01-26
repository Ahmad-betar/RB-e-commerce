import LoadingSpinner from "@/components/ui/loading";
import { Suspense, lazy } from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
// import LoadingSpinner from "./src/components/ui/loading";

const Routes = () => {
  const Home = lazy(() => import("@/pages/home/home"));
  const Cart = lazy(() => import("@/pages/cart/cart"));
  const CreateAccount = lazy(() => import("@/pages/auth/create-account"));

  return (
    <ReactRoutes>
      <Route
        path="/create-account"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <CreateAccount />
          </Suspense>
        }
      />

      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path="/cart"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Cart />
          </Suspense>
        }
      />
    </ReactRoutes>
  );
};

export default Routes;
