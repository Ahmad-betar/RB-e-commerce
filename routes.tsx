import LoadingSpinner from "@/components/ui/loading";
import { Suspense, lazy } from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
// import LoadingSpinner from "./src/components/ui/loading";

const Routes = () => {
  const Login = lazy(() => import("@/pages/auth/login"));
  const RequestPasswordReset = lazy(
    () => import("@/pages/auth/request-password-reset")
  );
  const PasswordReset = lazy(() => import("@/pages/auth/reset-password"));
  const CreateAccount = lazy(() => import("@/pages/auth/create-account"));
  const Home = lazy(() => import("@/pages/home/home"));
  const Cart = lazy(() => import("@/pages/cart/cart"));
  const Orders = lazy(() => import("@/pages/order/orders"));
  const Order = lazy(() => import("@/pages/order/order"));
  const Categories = lazy(() => import("@/pages/categories/categories"));
  const CategoryProduct = lazy(
    () => import("@/pages/categories/category-products")
  );
  const Item = lazy(() => import("@/pages/item/item-page"));
  const Item2 = lazy(() => import("@/pages/item/item-page2"));
  const Invoice = lazy(() => import("@/pages/invoice/invoice"));
  const InvoiceDetails = lazy(() => import("@/pages/invoice/invoice-details"));
  const InvoicePayment = lazy(() => import("@/pages/invoice/invoice-payment"));

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ReactRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount create />} />
        <Route
          path="/request-reset-password"
          element={<RequestPasswordReset />}
        />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route
          path="/account-info"
          element={<CreateAccount create={false} />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoryProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<Order />} />
        <Route path="/product/:id" element={<Item />} />
        <Route path="/item-2" element={<Item2 />} />
        <Route path="/invoice-details" element={<InvoiceDetails />} />
        <Route path="/invoice-payment" element={<InvoicePayment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="*" element={<>Page not found</>} />
      </ReactRoutes>
    </Suspense>
  );
};

export default Routes;
