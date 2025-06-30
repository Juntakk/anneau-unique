import { NameProvider } from '@/providers/NameContext';
import { UserProvider } from '@/providers/UserContext';
import { getUserByName } from '@/lib/actions/user.actions';
import MainPage from './main-page';

type Props = {
  params: Promise<{ name: string }>;
};

const Home = async ({ params }: Props) => {
  const { name } = await params;
  const rawUser = await getUserByName(name);
  const user = rawUser
    ? {
        armes: [],
        equipements: [],
        ...rawUser,
      }
    : undefined;

  return (
    <NameProvider name={name}>
      <UserProvider user={user}>
        <MainPage />
      </UserProvider>
    </NameProvider>
  );
};

export default Home;
