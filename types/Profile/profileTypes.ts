// Asegúrate de que el tipo 'User' esté bien definido
export interface User {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  avatarUrl: string;
}

// Aquí puedes agregar un tipo 'UpdateProfileResponse' si necesitas representarlo específicamente
export interface UpdateProfileResponse {
  success: boolean;
  message: string;
  updatedUser: Partial<User>; // Usa 'Partial' para indicar que solo se actualizan algunos campos del usuario
}

// Si necesitas actualizar otros tipos relacionados, aquí es donde lo harías también
export interface UpdateProfilePayload {
  name?: string;
  lastName?: string;
  password?: string;
  identification?: string;
  email?: string;
  phone?: string;
  specialty?: string;
  avatarUrl?: string;
}
