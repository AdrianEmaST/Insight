// components/UserName.tsx
'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/slices/userSlice';

const UserName = () => {
  const { data, loading, error } = useSelector(selectUser);

  if (loading) return <span className="text-sm text-gray-400">Cargando...</span>;
  if (error) return <span className="text-sm text-red-500">Error</span>;
  if (!data) return <span className="text-sm text-gray-400">Usuario</span>;

  return (
    <span className="flex flex-col text-base leading-normal font-normal">
      <span>María Pérez</span>

      <span className="text-sm leading-tight font-normal">psicologodemo@yopmail.com</span>
    </span>
  );
};

export default UserName;
