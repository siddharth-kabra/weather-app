'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/utils/constants';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center">
      <h1 className="text-[100px] text-blue-700 font-bold">404</h1>
      <h1 className="text-5xl text-blue-700 font-bold mb-8 animate-pulse">
        {CONSTANTS.NOT_FOUND}
      </h1>
      <p className="text-blue-700 text-lg mb-8">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="bg-blue-800 rounded text-white hover:text-blue-700 hover:bg-transparent border border-blue-700 p-3"
      >
        {CONSTANTS.RETURN_TO_HOME}
      </Link>
    </div>
  );
}
