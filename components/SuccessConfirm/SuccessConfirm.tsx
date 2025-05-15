'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ValidCodeImage } from '@/public';
import { useState } from 'react';

export function SuccessConfirm() {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  const handleClick = () => {
    setRedirecting(true);
    router.push('/dashboard/home');
  };

  return (
    <>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
          animation:
            fadeInSlideUpScaleGlow 1s ease forwards,
            bounce 1s ease 1s forwards;
        }

        @keyframes fadeInSlideUpScaleGlow {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
            filter: drop-shadow(0 0 0 transparent);
          }
          70% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
            filter: drop-shadow(0 0 10px #0655d5);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 0 15px #0a72ff88);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        button {
          transition: box-shadow 0.4s ease;
        }

        button:not(:disabled):hover {
          box-shadow: 0 0 15px 3px #0a72ffcc;
          transform: scale(1.03);
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none !important;
          transform: none !important;
        }
      `}</style>

      <div className="fade-in flex min-h-screen w-full flex-col">
        {/* Contenido principal con grid */}
        <div className="mt-0 grid h-full w-full grid-cols-1 px-6 md:h-screen md:grid-cols-2">
          <div>
            <div className="hidden lg:mt-10 lg:ml-24 lg:block lg:pt-7">{/* LOGO DESKTOP */}</div>
            <div className="m-auto mt-36 flex flex-col items-center lg:mt-24">
              <div className="flex h-48 w-48 justify-center">
                <Image width={250} height={250} src={ValidCodeImage} alt="checkmark logo" />
              </div>
              <h1 className="mt-11 justify-start font-['Roboto'] text-base leading-tight font-normal text-black lg:w-[445px] lg:text-center lg:text-lg">
                Tu cuenta fue confirmada exitosamente
              </h1>
            </div>

            <div className="mt-24 flex justify-center lg:mt-32">
              <button
                type="submit"
                disabled={redirecting}
                onClick={handleClick}
                className={`mb-0 inline-flex h-12 w-[350px] items-center justify-center rounded-lg bg-[#0655D5] lg:mt-0 lg:w-[470px] lg:rounded-xl ${
                  redirecting ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <p className="justify-start border-none text-center font-['Roboto'] text-base leading-normal font-semibold text-white lg:text-2xl lg:leading-7">
                  {redirecting ? 'Cargando...' : 'Iniciar Sesión'}
                </p>
              </button>
            </div>
          </div>
          {/* Columna decorativa derecha */}
        </div>
      </div>
    </>
  );
}
