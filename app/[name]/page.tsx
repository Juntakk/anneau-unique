import { NameProvider } from "@/providers/NameContext";
import { UserProvider } from "@/providers/UserContext";
import { getUserByName } from "@/lib/actions/user.actions";
import MainPage from "./main-page";

type Props = {
  params: { name: string };
};

const Home = async ({ params }: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { name } = params;
  const user = await getUserByName(name);

  return (
    <NameProvider name={name}>
      <UserProvider user={user ?? undefined}>
        <MainPage />
      </UserProvider>
    </NameProvider>
  );
};

export default Home;
