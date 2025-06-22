type AttributeCirclesProps = {
  outerLabel: string;
  innerLabel: string;
};

const AttributeCircles = ({
  outerLabel,
  innerLabel,
}: AttributeCirclesProps) => {
  return (
    <div className="relative w-[140px] h-[140px]">
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
        className="absolute w-[70px] h-[70px] rounded-full border-2 border-foreground text-center text-2xl font-bold bg-transparent outline-none left-[75%] top-[-10%]"
      />

      {/* Label for inner input - right side */}
      <label className="absolute left-[80%] top-[-10%] translate-x-[105%] translate-y-[40%] text-sm font-semibold text-foreground">
        {innerLabel}
      </label>
    </div>
  );
};

export default AttributeCircles;
