'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthBackground from '@/components/AuthBackground/AuthBackground';
import Head from 'next/head';
import Image from 'next/image';

const ConfirmAccount = () => {
  const [code, setCode] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .slice(0, 8); // máximo 8 caracteres
    setCode(value);
  };

  const handleVerify = () => {
    if (code.length === 8) {
      setSuccess(true);
    }
  };

  const handleRedirect = () => {
    router.push('/dashboard/home');
  };

  const totalBoxes = 8;
  const boxes = [...code.split(''), ...Array(totalBoxes - code.length).fill('')];

  return (
    <>
      <Head>
        <title>Confirmar cuenta</title>
      </Head>

      <div className="flex min-h-screen bg-white font-['Roboto']">
        {/* Izquierda: Formulario o Éxito */}
        <div className="relative w-full md:w-1/2">
          {!success ? (
            <>
              {/* Título */}
              <h1 className="absolute top-[264px] left-[118px] text-3xl leading-[48px] font-semibold text-black">
                Confirme su cuenta
              </h1>

              {/* Descripción */}
              <p className="absolute top-[365px] left-[118px] w-[500px] text-lg leading-tight font-normal text-black">
                Para confirmar su cuenta recibirá un código al email ingresado. Ingrese el código
                debajo.
              </p>

              {/* Cuadros de código */}
              <div className="absolute top-[478px] left-[118px] flex max-w-[600px] flex-wrap gap-3">
                {boxes.map((char, i) => (
                  <div
                    key={i}
                    className="flex h-20 w-16 items-center justify-center rounded-lg border border-black/50 text-center text-4xl"
                  >
                    {char}
                  </div>
                ))}
                {code.length === 0 && (
                  <span className="absolute top-[85px] left-0 text-sm text-gray-400">
                    Escribe tu código aquí
                  </span>
                )}
              </div>

              {/* Input invisible */}
              <input
                type="text"
                inputMode="text"
                autoFocus
                maxLength={8}
                value={code}
                onChange={handleInputChange}
                className="absolute top-[478px] left-[118px] z-10 h-20 w-[600px] opacity-0"
              />

              {/* Botón Verificar */}
              <button
                disabled={code.length !== 8}
                onClick={handleVerify}
                className={`absolute top-[640px] left-[118px] flex h-12 w-[600px] items-center justify-center rounded-xl text-2xl font-semibold transition-all duration-200 ${
                  code.length === 8
                    ? 'cursor-pointer bg-blue-600 text-white hover:bg-blue-700'
                    : 'cursor-not-allowed bg-gray-200 text-gray-500'
                }`}
              >
                Verificar código
              </button>
            </>
          ) : (
            <>
              {/* Animación de éxito */}
              <div className="animate-fade-in items-star absolute top-[300px] left-[118px] z-10 flex flex-col gap-6">
                <Image
                  width={96}
                  height={96}
                  src="/icons/valid.svg"
                  alt="Cuenta verificada"
                  className="success-bounce"
                />
                <h2 className="text-2xl font-semibold text-green-600">
                  Su cuenta fue creada exitosamente
                </h2>
              </div>

              {/* Botón para ir al dashboard */}
              <button
                onClick={handleRedirect}
                className="absolute top-[480px] left-[118px] flex h-12 w-[600px] items-center justify-center rounded-xl bg-green-600 text-2xl font-semibold text-white transition-all duration-200 hover:bg-green-700"
              >
                Home
              </button>
            </>
          )}
        </div>

        {/* Derecha: Imagen de fondo */}
        <div className="relative hidden w-1/2 md:block">
          <AuthBackground />
        </div>
      </div>

      {/* Animaciones */}
      <style jsx>{`
        .success-bounce {
          animation: bounceIn 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          60% {
            transform: scale(1.2);
            opacity: 1;
          }
          80% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ConfirmAccount;
