"use client";

import { CONSTANTS } from "@/utils/constants";
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
          {CONSTANTS.OOPS}
          </h1>
          <p className="text-blue-700 text-lg mb-8">{CONSTANTS.SOMETHING_WRONG}</p>
        </div>
        <button onClick={() => reset()}>{CONSTANTS.TRY_AGAIN}</button>
      </body>
    </html>
  );
}
