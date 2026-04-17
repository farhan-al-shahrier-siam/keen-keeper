"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-green-900">
      <h1 className="text-8xl font-bold mb-4">404</h1>

      <p className="text-xl mb-6 text-green-800">
        Oops! Page not found.
      </p>
      <button
        onClick={() => router.back()}
        className="px-6 py-3 bg-green-700 text-white rounded-2xl shadow-md hover:bg-green-800 active:scale-95 transition-all duration-200"
      >
        Go Back
      </button>
    </div>
  );
}