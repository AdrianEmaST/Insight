interface MockUser {
  id: number;
  identification: number;
  name: string;
  surname: string;
  email: string;
  phone: string | null;
  title: string;
}

interface UserProfile {
  nombre: string;
  nacionalidad: string;
  email: string;
  titulo: string;
}

const fallbackUser: MockUser = {
  id: 10,
  identification: 21645384,
  email: 'psicologaMaria@yahoo.com',
  name: 'María',
  surname: 'Pérez',
  phone: '+541126325869',
  title: 'Psicóloga Infantil',
};

export function mergeUserProfileToMockUser(profile: UserProfile): MockUser {
  const [firstName = '', ...rest] = profile.nombre?.trim().split(' ');
  const lastName = rest.join(' ');

  return {
    ...fallbackUser,
    name: firstName || fallbackUser.name,
    surname: lastName || fallbackUser.surname,
    email: profile.email || fallbackUser.email,
    title: profile.titulo || fallbackUser.title,
  };
}
