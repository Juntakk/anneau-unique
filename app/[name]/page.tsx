import MainPage from './main-page';
import { NameProvider } from '@/providers/useName';

type Props = {
  params: Promise<{ name: string }>;
};

const Home = async ({ params }: Props) => {
  const { name } = await params;

  return (
    <NameProvider name={name}>
      <MainPage />;
    </NameProvider>
  );
};

export default Home;
