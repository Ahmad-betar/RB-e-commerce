import LoadingSpinner from "@/components/ui/loading";
import { Suspense, lazy } from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
// import LoadingSpinner from "./src/components/ui/loading";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <div>sdf</div>
          </Suspense>
        }
      />
    </ReactRoutes>
  );
};

export default Routes;
