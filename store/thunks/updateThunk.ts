import { createAsyncThunk } from '@reduxjs/toolkit';
import { UpdateProfilePayload, UpdateProfileResponse } from '@/types/Profile/profileTypes';
import type { RootState } from '../index';

export const updateProfile = createAsyncThunk<
  UpdateProfileResponse, // Tipo de la respuesta esperada
  UpdateProfilePayload, // Tipo de los datos enviados al backend
  { state: RootState; rejectValue: string }
>('profile/update', async (formData, { getState, rejectWithValue }) => {
  const token = getState().auth.token;

  try {
    const res = await fetch('https://brave-generosity-production.up.railway.app/api/User/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      const message = errorData?.message || 'Error al actualizar perfil';
      throw new Error(message);
    }

    const data: UpdateProfileResponse = await res.json();
    return data; // Aquí devolvemos la respuesta con 'updatedUser', que es un objeto parcial de 'User'
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message || 'Error desconocido al actualizar perfil');
    }
    return rejectWithValue('Error desconocido al actualizar perfil');
  }
});
