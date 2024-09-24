// src/NotFound.js
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex bg-black text-white items-center justify-center min-h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-500">{error?.status}</h1>
        <p className="mt-4 text-lg  font-semibold">
          Oops! Page not found.
        </p>
        <p className="mt-2 ">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 animate-bounce inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
