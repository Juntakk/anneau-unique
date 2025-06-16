import MainPage from "../components/main-page";

type Props = {
  params: {
    name: string;
  };
};

const Home = async ({ params }: Props) => {
  const { name } = await params;
  return <MainPage name={name} />;
};

export default Home;
