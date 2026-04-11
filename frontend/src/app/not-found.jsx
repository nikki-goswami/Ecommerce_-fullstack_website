import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8">
        
        {/* 404 */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-600">
          Oops! The page you’re looking for doesn’t exist or was moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl 
                     bg-gradient-to-r from-blue-500 to-purple-600 
                     px-6 py-3 text-white font-medium 
                     hover:scale-105 transition-transform"
        >
          Go to Home
        </Link>

      </div>
    </div>
  );
}
