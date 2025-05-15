'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useConfirmCode } from '@/hooks/useConfirmCode';
import { SuccessConfirm } from '@/components';
import { Logo as InsightLogo, BackgroundSignup } from '@/public';

function ConfirmAccount() {
  const [confirmed, setConfirmed] = useState(false);

  const { code, isComplete, isLoading, handleChange, handleSubmit, setCode } = useConfirmCode(() =>
    setConfirmed(true)
  );

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').slice(0, 8).toUpperCase();
    const newCode = paste.split('').slice(0, code.length);

    const paddedCode = [...newCode];
    while (paddedCode.length < code.length) {
      paddedCode.push('');
    }

    setCode(paddedCode);
  };

  return (
    <>
      <div className="h-full min-h-screen w-full min-w-screen overflow-hidden bg-white">
        {/* Grid principal */}
        <div className="custom-grid mt-12 grid h-full w-full grid-cols-1 px-6 md:h-screen md:grid-cols-2 lg:mt-0">
          {/* Columna izquierda */}
          <div className="custom-left-col flex h-full flex-col items-center justify-center bg-white lg:m-auto lg:block lg:w-[470px] 2xl:pt-20">
            {/* Logo escritorio */}
            <div className="logo-container mt-16 py-7">
              <Link href="/">
                <Image
                  src={InsightLogo}
                  alt="InsightLogo"
                  width={150}
                  height={34}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Contenido condicional */}
            {!confirmed ? (
              <div className="lg:mt-20">
                <h1 className="text-2xl font-bold text-black lg:text-3xl">Confirme su cuenta</h1>
                <p className="mt-12 w-[350px] text-base text-black lg:w-[445px] lg:text-lg">
                  Para confirmar su cuenta recibirá un código al email ingresado. Ingrese el código
                  debajo.
                </p>

                <form className="mt-16 flex flex-col items-center" onSubmit={handleSubmit}>
                  <div className="flex h-14 gap-2 lg:h-[60px] lg:w-full lg:gap-2">
                    {code.map((char, i) => (
                      <input
                        key={i}
                        id={`code-${i}`}
                        type="text"
                        value={char}
                        onChange={(e) => handleChange(e, i)}
                        onPaste={handlePaste}
                        maxLength={1}
                        className="h-full w-9 rounded-lg border border-black/50 text-center text-xl text-black uppercase lg:w-1/8"
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={!isComplete || isLoading}
                    className={`mt-16 mb-0 h-12 w-[350px] rounded-lg lg:mt-20 lg:w-[470px] lg:rounded-xl ${
                      !isComplete
                        ? 'cursor-not-allowed bg-[#0011661A]'
                        : 'cursor-pointer bg-[#0655D5]'
                    }`}
                  >
                    <p className="text-base font-semibold text-white lg:text-2xl">
                      {isLoading ? 'Cargando...' : 'Verificar código'}
                    </p>
                  </button>
                </form>
              </div>
            ) : (
              <div className="fade-in w-full">
                <SuccessConfirm />
              </div>
            )}
          </div>

          {/* Columna derecha */}
          <div className="custom-bg-image relative hidden h-[600px] w-full max-w-[720px] overflow-hidden md:h-full lg:block 2xl:max-w-[990px]">
            <Image
              priority
              src={BackgroundSignup}
              alt="Login page Background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </div>
        </div>
      </div>

      {/* Estilos para la responsividad específica */}
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          .custom-left-col {
            max-width: 480px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .custom-grid {
            max-width: 1024px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            column-gap: 2rem; /* Espacio entre columnas para evitar que se junten */
          }
          .custom-bg-image {
            display: block !important;
            position: relative !important;
            height: auto !important;
            min-height: 400px;
          }
          /* Aquí el logo alineado a la izquierda */
          .logo-container {
            display: flex !important;
            justify-content: flex-start !important;
            align-items: center !important;
            margin-left: 0 !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </>
  );
}

export default ConfirmAccount;
