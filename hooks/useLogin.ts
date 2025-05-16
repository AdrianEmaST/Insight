'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setToken } from '@/store/slices/authSlice';
import { BACKEND_BASE_URL } from '@/config';
import { mockToken } from '@/mocks';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const login = async (email: string, password: string, useMock = false) => {
    setLoading(true);
    setError(null);

    try {
      if (useMock) {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        dispatch(setToken(mockToken));
        sessionStorage.setItem('token', mockToken);
        return true;
      }

      const res = await fetch(`${BACKEND_BASE_URL}/api/Auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      const data = await res.json();
      const token = data.token;

      dispatch(setToken(token));
      sessionStorage.setItem('token', token);

      return true;
    } catch (err) {
      console.error(err);
      setError(JSON.stringify(err));
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
