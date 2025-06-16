import UserAvatar from "../components/shared/user-avatar";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-8">
        <UserAvatar name="Firiel" image="../images/firiel_1.png" />
        <UserAvatar name="Nori" image="../images/nori_1.png" />
        <UserAvatar name="Raenvild" image="../images/raenvild_1.png" />
        <UserAvatar name="Yorick" image="../images/yorick_1.png" />
        <UserAvatar name="Varr" image="../images/varr_1.png" />
      </div>
    </div>
  );
}
