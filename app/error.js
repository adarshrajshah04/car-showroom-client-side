"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen pt-30 bg-primary text-light-text flex flex-col items-center justify-center">
      <h2 className="text-3xl">
        Something went wrong!
      </h2>

      <p className="mt-4 text-dark-text">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-3 rounded-full border border-border"
      >
        Try again
      </button>
    </div>
  );
}