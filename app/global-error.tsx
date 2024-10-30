"use client";

import { FaCircleExclamation } from "react-icons/fa6";

export default function GlobalError({
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center">
          <FaCircleExclamation className="text-[90px] text-blue-700 mb-5 animate-pulse" />
          <h1 className="text-5xl text-blue-700 font-bold mb-8 animate-pulse">
            OOPS!
          </h1>
          <p className="text-blue-700 text-lg mb-8">Something went wrong.</p>
        </div>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
