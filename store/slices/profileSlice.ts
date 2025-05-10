import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '@/store/thunks/profileThunk';
import { updateProfile } from '@/store/thunks/updateThunk';
import type { User } from '@/types/Profile/profileTypes';

interface ErrorPayload {
  message: string;
  code?: number;
}

interface ProfileState {
  user: User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | ErrorPayload | null;
}

const initialState: ProfileState = {
  user: {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    specialty: '',
    avatarUrl: '',
  },
  status: 'idle',
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAvatar: (state, action) => {
      state.user.avatarUrl = action.payload;
    },
    setUserField: (state, action) => {
      const { field, value } = action.payload;
      if (field in state.user) {
        state.user[field as keyof User] = value;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = 'failed';
        const errorPayload = action.payload;
        if (typeof errorPayload === 'string') {
          state.error = { message: errorPayload };
        } else {
          state.error = { message: 'Error desconocido al obtener perfil' };
        }
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Aquí actualizas el perfil con la información actualizada
        state.user = { ...state.user, ...action.payload.updatedUser };
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Error desconocido al actualizar perfil';
      });
  },
});

export const { setAvatar, setUserField } = profileSlice.actions;
export default profileSlice.reducer;
