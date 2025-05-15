'use client';

import { useEffect, useState } from 'react';

export default function ProgressLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const activeColor = '#FACC15'; // Amarillo cálido (Tailwind yellow-400)

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm select-none">
      <svg
        width="120"
        height="120"
        viewBox="-20 -20 104 104"
        fill="none"
        className="mb-6 animate-pulse"
        style={{
          filter: `drop-shadow(0 0 ${progress / 10}px rgba(250, 204, 21, ${0.3 + progress / 200}))`,
          transition: 'filter 0.3s ease',
        }}
      >
        {/* Contorno de foco estilo logo */}
        <path
          d="M32 2C20 2 10 12 10 24c0 7 3 13 8 17v5h28v-5c5-4 8-10 8-17 0-12-10-22-22-22Z"
          stroke={progress > 0 ? activeColor : '#2563EB'}
          strokeWidth="4"
          fill="white"
        />

        {/* Casquillo base */}
        <rect x="24" y="48" width="16" height="4" fill="#2563EB" />
        <rect x="26" y="52" width="12" height="4" fill="#2563EB" />
      </svg>

      <div className="relative h-2 w-72 overflow-hidden rounded-full bg-gray-300">
        <div
          className="h-full bg-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 font-semibold text-yellow-600 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]">
        {progress}%
      </p>
    </div>
  );
}
