'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ProgressLoader from '../ProgressLoader/ProgressLoader';

export default function ClientLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Cuando cambie la ruta, activa el loader
    setLoading(true);

    // Desactiva el loader después de 3.5 segundos (igual que antes)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Limpieza si el componente se desmonta o cambia la ruta rápido
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return <ProgressLoader />;
}
