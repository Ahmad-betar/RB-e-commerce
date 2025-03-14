import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* 404 Text */}
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>

      {/* Description */}
      <p className="text-lg text-gray-500 mt-2 text-center">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link to="/" className={buttonVariants()}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
