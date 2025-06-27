import MainPage from "./main-page";

type Props = {
  params: Promise<{ name: string }>;
};

const Home = async ({ params }: Props) => {
  const { name } = await params;

  return <MainPage name={name} />;
};

export default Home;
