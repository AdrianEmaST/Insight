'use client';

import Image from 'next/image';
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

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm select-none">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={200}
        height={200}
        className="mb-6 animate-pulse"
        style={{
          filter: `drop-shadow(0 0 ${progress / 10}px rgba(250, 204, 21, ${0.3 + progress / 200}))`,
          transition: 'filter 0.3s ease',
        }}
      />

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
