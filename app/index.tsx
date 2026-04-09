import { Redirect } from 'expo-router';

export default function Index() {
  // Aqui futuramente você checa o token de auth
  // Por ora, redireciona sempre para o login
  return <Redirect href="/login" />;
}
