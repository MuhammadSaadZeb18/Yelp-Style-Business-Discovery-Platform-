import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        {/* Error Code */}
        <h1 className="text-5xl text-center font-bold mb-4 bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-xl hover:from-pink-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
