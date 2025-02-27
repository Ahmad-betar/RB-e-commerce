import LoadingSpinner from "@/components/ui/loading";
import { Suspense, lazy } from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
// import LoadingSpinner from "./src/components/ui/loading";

const Routes = () => {
  const Login = lazy(() => import("@/pages/auth/login"));
  const RequestPasswordReset = lazy(() => import("@/pages/auth/request-password-reset"));
  const CreateAccount = lazy(() => import("@/pages/auth/create-account"));
  const Home = lazy(() => import("@/pages/home/home"));
  const Cart = lazy(() => import("@/pages/cart/cart"));
  const Categories = lazy(() => import("@/pages/categories/categories"));
  const Item = lazy(() => import("@/pages/item/item-page"));
  const Item2 = lazy(() => import("@/pages/item/item-page2"));
  const InvoiceDetails = lazy(() => import("@/pages/invoice/invoice-details"));
  const InvoicePayment = lazy(() => import("@/pages/invoice/invoice-payment"));

  return (
    <ReactRoutes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/create-account"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <CreateAccount create />
          </Suspense>
        }
      />
      <Route
        path="/request-reset-password"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <RequestPasswordReset />
          </Suspense>
        }
      />
      <Route
        path="/account-info"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <CreateAccount create={false} />
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
        path="/categories"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Categories />
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

      <Route
        path="/item-1"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Item />
          </Suspense>
        }
      />

      <Route
        path="/item-2"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Item2 />
          </Suspense>
        }
      />

      <Route
        path="/invoice-details"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <InvoiceDetails />
          </Suspense>
        }
      />

      <Route
        path="/invoice-payment"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <InvoicePayment />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <>Page not found</>
          </Suspense>
        }
      />
    </ReactRoutes>
  );
};

export default Routes;
