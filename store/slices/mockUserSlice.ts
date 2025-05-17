import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MockUser {
  id: number;
  identification: number;
  name: string;
  surname: string;
  email: string;
  phone: string | null;
  title: string;
}

const initialState: MockUser = {
  id: 10,
  identification: 21645384,
  email: 'psicologaMaria@yahoo.com',
  name: 'María',
  surname: 'Pérez',
  phone: '+541126325869',
  title: 'Psicóloga Infantil',
};

const userSlice = createSlice({
  name: 'mockUser',
  initialState,
  reducers: {
    getMockUser: (_state, action: PayloadAction<MockUser>) => {
      return action.payload;
    },
    editMockUser: (state, action: PayloadAction<Partial<MockUser>>) => {
      if (state) {
        return { ...state, ...action.payload };
      }
      return state;
    },
  },
});

export const { getMockUser, editMockUser } = userSlice.actions;
export default userSlice.reducer;
