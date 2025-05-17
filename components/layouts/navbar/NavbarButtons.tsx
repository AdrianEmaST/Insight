'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { useLogout } from '@/hooks';
import { Campana, AvatarGeneral, FlechaBaja } from '@/public';
import DropdownUserMenu from './DropdownUserMenu'; // Asegúrate de que el path sea correcto

export default function NavbarButtons() {
  const { logout } = useLogout();

  const optionsButtonRef = useRef<HTMLDivElement>(null);
  const optionsPopupRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    function closeOnClickOutside(event: MouseEvent) {
      const isOutsideClick =
        optionsPopupRef.current &&
        !optionsPopupRef.current.contains(event.target as Node) &&
        optionsButtonRef.current &&
        !optionsButtonRef.current.contains(event.target as Node);

      if (isOutsideClick) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', closeOnClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', closeOnClickOutside);
    };
  }, [isOpen]);

  // Función para manejar logout desde modal
  function handleConfirmLogout() {
    logout();
    setShowLogoutModal(false);
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <span>
          <Image src={Campana} alt="Campana" className="object-contain" />
        </span>
        <span>
          <Image
            src={AvatarGeneral}
            height={32}
            width={32}
            alt="Avatar"
            className="object-contain"
          />
        </span>
        <span ref={optionsButtonRef} onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={FlechaBaja}
            alt="Flecha Baja"
            className="object-contain hover:cursor-pointer"
          />
          {isOpen && (
            <DropdownUserMenu
              ref={optionsPopupRef}
              onLogout={() => {
                setShowLogoutModal(true);
                setIsOpen(false); // Cierra dropdown al abrir modal
              }}
            />
          )}
        </span>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="w-full max-w-xs rounded bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">¿Cerrar sesión?</h2>
            <p className="mb-6 text-gray-700">¿Estás seguro que quieres cerrar sesión?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleConfirmLogout}
                className="cursor-pointer rounded bg-[#0655D5] px-4 py-2 font-semibold text-white hover:bg-[#0A6EDD]"
              >
                Cerrar sesión
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="cursor-pointer rounded border bg-white px-4 py-2 font-semibold text-[#0655D5] hover:bg-gray-100"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
