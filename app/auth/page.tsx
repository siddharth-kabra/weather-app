import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import AuthForm from '@/components/auth-form';

const AuthPage = async () => {
  const data = await getServerSession();
  if (data) {
    redirect('/');
  }
  return <AuthForm />;
};

export default AuthPage;
