const stats = ['Communauté', 'Points de Progression', 'Trésors', 'Prestige'];

const CommunauteCircle = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-2xl text-center mb-2">{label}</h2>
    <input
      type="text"
      maxLength={1}
      className="w-40 h-40 rounded-full border-2 border-foreground text-center text-4xl font-bold bg-transparent outline-none"
    />
  </div>
);

export default function CommunauteSection() {
  return (
    <div className="flex w-full justify-around items-center mb-12">
      {stats.map((label) => (
        <CommunauteCircle key={label} label={label} />
      ))}
    </div>
  );
}
