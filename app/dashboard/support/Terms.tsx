import React from 'react';

export default function Terms() {
  return (
    <div className="pr-6 pl-8">
      <h3 className="mb-6 text-2xl font-bold text-gray-900">Términos y Condiciones de Uso</h3>

      <div className="mb-10 space-y-4 text-sm leading-relaxed text-black">
        <p>Última actualización: 16 de mayo de 2025.</p>
        <p>Bienvenido/a a “Insight”.</p>
        <p>
          Al registrarte y utilizar nuestros servicios, aceptas los presentes Términos y Condiciones
          de Uso, que regulan la relación entre tú (el usuario profesional de la salud mental) e
          Insight App.
        </p>
      </div>

      <section className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">1. Descripcion del Servicio</h4>
        <p className="mb-4 text-sm leading-relaxed text-black">
          La Plataforma permite a profesionales de la salud mental gestionar información de sus
          pacientes, registrar sesiones, compartir tareas y mantener comunicación profesional
          mediante un entorno seguro.
        </p>
      </section>

      <section className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">2. Usuario responsable</h4>
        <p className="mb-4 text-sm leading-relaxed text-black">
          El uso de la Plataforma está destinado exclusivamente a psicólogos/as y profesionales
          habilitados/as, quienes serán responsables del tratamiento de los datos personales y
          sensibles que ingresen en el sistema, conforme a la Ley 25.326.
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-black">
          <li>Usar la Plataforma respetando el secreto profesional.</li>
          <li>
            Obtener el consentimiento informado del paciente para el registro y tratamiento de su
            información.
          </li>
          <li>No compartir datos del paciente con terceros no autorizados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">
          3. Datos personales y confidencialidad
        </h4>
        <p className="mb-4 text-sm leading-relaxed text-black">
          La Plataforma almacena datos personales y sensibles, incluyendo información de salud.
          Estos datos:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-black">
          <li>Son protegidos mediante medidas técnicas como cifrado y control de accesos.</li>
          <li>
            No serán compartidos con terceros sin autorización expresa del usuario y/o paciente.
          </li>
          <li>
            Pueden ser modificados o eliminados a pedido del profesional o paciente, según la
            normativa vigente.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-black">
          La empresa actúa como encargado del tratamiento, implementando medidas de seguridad pero
          sin acceso directo al contenido clínico, salvo requerimiento legal.
        </p>
      </section>

      <section className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">4. Seguridad y Acceso</h4>
        <p className="text-sm leading-relaxed text-black">
          El usuario se compromete a mantener la confidencialidad de sus credenciales de acceso. La
          Plataforma recomienda el uso de contraseñas fuertes y no se responsabiliza por accesos
          indebidos derivados de negligencia del usuario.
        </p>
      </section>

      <section className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">5. Propiedad Intelectual</h4>
        <p className="text-sm leading-relaxed text-black">
          Todo el contenido y desarrollo tecnológico de la Plataforma pertenece a
          <span className="font-bold"> &quot;Insight&quot;</span>, quedando prohibida su
          reproduccion o distribucion sin autorizacion expresa.
        </p>
      </section>

      <section className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">6. Modificaciones</h4>
        <p className="text-sm leading-relaxed text-black">
          Nos reservamos el derecho de modificar estos Términos y Condiciones. Notificaremos a los
          usuarios registrados sobre cualquier cambio relevante. El uso continuado de la Plataforma
          implica aceptación de los nuevos términos.
        </p>
      </section>

      <section className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">7. Legislacion Aplicable</h4>
        <p className="text-sm leading-relaxed text-black">
          Estos terminos y condiciones se rigen por las leyes de la República Argentina. Cualquier
          controversia sera sometida a la jurisdicción de los tribunales ordinarios de la Ciudad
          Autónoma de Buenos Aires.
        </p>
      </section>
    </div>
  );
}
