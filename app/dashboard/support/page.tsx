'use client';

import React, { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import Terms from '@/app/dashboard/support/Terms';

export default function Soporte() {
  const preguntas: { pregunta: string; respuesta: string }[] = [
    {
      pregunta: '¿Es segura la información que cargo sobre mis pacientes?',
      respuesta:
        'Sí. Utilizamos estándares de seguridad y encriptación para proteger todos los datos personales y clínicos ingresados en la plataforma.',
    },
    {
      pregunta: '¿Puedo compartir tareas o notas con mis pacientes desde la app?',
      respuesta:
        'Sí. Podés enviar información relevante como tareas, ejercicios o recordatorios directamente desde la app, y el paciente los recibe en su perfil.',
    },
    {
      pregunta: '¿Mis pacientes pueden ver toda la información que subo?',
      respuesta:
        'No. Solo se comparte la información que el profesional decide enviar al paciente. El resto permanece privado en tu cuenta profesional.',
    },
    {
      pregunta: '¿Hay un costo por usar esta app?',
      respuesta:
        'Ofrecemos un plan gratuito con funciones básicas y planes pagos con funcionalidades avanzadas. Consultá nuestros planes en la sección de precios.',
    },
    {
      pregunta: '¿Qué hacer si encuentro un error en la plataforma?',
      respuesta:
        'Si encuentras un error, por favor, comunícalo a través de nuestro formulario de soporte o por email a soporte@insightapp.com.',
    },
  ];

  const [activa, setActiva] = useState<number | null>(null);

  const togglePregunta = (index: number): void => {
    setActiva(activa === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="w-full pr-6 pl-[52px]">
        {/* TÍTULO alineado más a la izquierda */}
        <div className="mb-6">
          <p className="mb-1 text-sm text-gray-500">Dashboard / Soporte</p>
          <h2 className="text-2xl font-bold">Soporte</h2>
        </div>

        {/* CONTENIDO (con indentado) */}
        <div className="mb-8 pl-8">
          <h3 className="mb-2 text-xl font-bold">¿Necesitas ayuda? Contáctanos</h3>
          <p className="text-sm text-black">
            📧 <strong>soporte@insightapp.com</strong>
            {'\n'}
            Horario de atención: Lunes a Viernes 8 a 18 h<br />
            {'\n'}
            No brindamos atención psicológica por este medio. Para urgencias, comunícate con líneas
            de asistencia profesional.
          </p>
        </div>

        <h3 className="mb-3 pl-8 text-xl font-bold">Preguntas Frecuentes</h3>

        {/* Actualización de contenedor de preguntas con líneas que abarcan todo el ancho */}
        <div className="mb-6 border-t border-b border-stone-300">
          {preguntas.map((item, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => togglePregunta(index)}
                className="flex w-full items-start justify-between gap-2 border-b border-stone-300 bg-transparent px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-black">{item.pregunta}</span>
                <div className="pr-6">
                  <TiArrowSortedDown
                    className={`mt-1 transform transition-transform duration-200 ${activa === index ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </div>
              </button>
              {activa === index && (
                <div className="w-full bg-transparent px-6 py-2 text-sm text-black">
                  {item.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>

        <Terms />
      </main>
    </div>
  );
}
