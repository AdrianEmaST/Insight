import React from 'react';
import AuthBackground from '@/components/AuthBackground/AuthBackground'; // ajusta la ruta
import Head from 'next/head';

const ConfirmAccount = () => {
  return (
    <>
      <Head>
        <title>Confirmar cuenta</title>
      </Head>
      <div className="flex min-h-screen">
        {/* Sección izquierda: formulario */}
        <div className="flex w-full flex-col items-center justify-center bg-white p-8 md:w-1/2">
          <h1 className="mb-4 text-2xl font-semibold">Confirme su cuenta</h1>
          <p className="mb-6 text-center text-gray-600">
            Para confirmar su cuenta recibirá un código al email ingresado. Ingrese el código
            debajo.
          </p>
          <div className="mb-6 flex gap-3">
            {[...Array(4)].map((_, i) => (
              <input
                key={i}
                maxLength={1}
                className="h-12 w-12 rounded-md border border-gray-300 text-center text-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
              />
            ))}
          </div>
          <button
            className="cursor-not-allowed rounded-md bg-gray-200 px-4 py-2 font-semibold text-gray-500"
            disabled
          >
            Verificar código
          </button>
        </div>

        {/* Sección derecha: imagen o componente */}
        <div className="relative hidden w-1/2 md:block">
          <AuthBackground className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default ConfirmAccount;
