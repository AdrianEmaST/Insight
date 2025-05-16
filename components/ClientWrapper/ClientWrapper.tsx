'use client';

import { ReactNode } from 'react';
import ClientLoader from '../ClientLoader/ClientLoader';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <ClientLoader />
      {children}
    </>
  );
}
