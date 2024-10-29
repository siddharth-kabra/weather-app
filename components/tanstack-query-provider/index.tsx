'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { getQueryClient } from '@/app/get-query-client';

export const queryClient = getQueryClient();
export default function TanstackProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
