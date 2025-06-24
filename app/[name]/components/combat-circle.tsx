const CombatCircle = ({
  innerLabel,
  label,
}: {
  innerLabel: string;
  label: string;
}) => {
  return (
    <div className="relative w-[150px] h-[150px]">
      <h1 className="text-center text-lg font-bold w-full">{label}</h1>
      {/* SMALL Circle Input */}
      <input
        type="text"
        maxLength={1}
        className="absolute w-full h-full rounded-full border-2 border-foreground text-center text-4xl font-bold bg-transparent outline-none"
      />

      {/* BIG Circle Input */}
      <input
        type="text"
        maxLength={1}
        className="absolute w-[70px] top-[60%] left-[-25%] h-[70px] rounded-full border-2 border-foreground text-center text-2xl font-bold bg-transparent outline-none"
      />

      {/* Label for SMALL input - bottom left side */}
      <label className="absolute top-[50%] right-[55%] w-full text-sm font-semibold text-foreground">
        {innerLabel}
      </label>
    </div>
  );
};

export default CombatCircle;
