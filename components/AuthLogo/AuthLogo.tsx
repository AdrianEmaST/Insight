'use client';

import Image from 'next/image';
import { Logo as InsightLogo } from '@/public';

const AuthLogo = () => {
  return (
    <div className="mt-6 mb-6 flex justify-center overflow-hidden lg:hidden">
      {/* Eliminar esta parte para ocultar el logo completamente */}
      <Image
        src={InsightLogo}
        alt="Insight Logo"
        width={120}
        height={34}
        className="object-contain"
      />
    </div>
  );
};

export default AuthLogo;
