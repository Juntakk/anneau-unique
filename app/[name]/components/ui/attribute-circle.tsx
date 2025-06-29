type AttributeCirclesProps = {
  outerLabel: string;
  innerLabel: string;
};

const AttributeCircle = ({ outerLabel, innerLabel }: AttributeCirclesProps) => {
  return (
    <div className="relative w-[150px] h-[150px]">
      <label className="absolute left-[-3.5rem] top-1/2 -translate-y-1/2 text-lg font-semibold text-foreground">
        {outerLabel}
      </label>

      {/* Outer Circle Input */}
      <input
        type="text"
        maxLength={1}
        className="w-full h-full rounded-full border-2 border-foreground text-center text-4xl font-bold bg-transparent outline-none"
      />

      {/* Inner Circle Input */}
      <input
        type="text"
        maxLength={1}
        className="absolute w-[70px] h-[70px] rounded-full border-2 border-foreground text-center text-2xl font-bold bg-transparent outline-none left-[85%] top-[-16%]"
      />

      {/* Label for inner input - right side */}
      <label className="absolute left-[95%] top-[-10%] translate-x-[105%] translate-y-[40%] text-sm font-semibold text-foreground">
        {innerLabel}
      </label>
    </div>
  );
};

export default AttributeCircle;
