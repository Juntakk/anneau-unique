const EnduranceEspoirCircle = ({
  upperLabel,
  lowerLabel,
}: {
  upperLabel: string;
  lowerLabel: string;
}) => {
  return (
    <div className="relative w-[180px] h-[180px]">
      <label className="absolute text-sm right-[95%] min-w-[100px] font-semibold text-foreground">
        {upperLabel}
      </label>

      {/* Big Circle Input */}
      <input
        type="text"
        maxLength={1}
        className="w-full h-full rounded-full border-2 border-foreground text-center text-4xl font-bold bg-transparent outline-none"
      />

      {/* Small Circle Input 1*/}
      <input
        type="text"
        maxLength={1}
        className="absolute w-[70px] h-[70px] rounded-full border-2 border-foreground text-center text-2xl font-bold bg-transparent outline-none right-[75%] top-[-10%]"
      />
      {/* Small Circle Input 2*/}

      <input
        type="text"
        maxLength={1}
        className="absolute w-[70px] h-[70px] rounded-full border-2 border-foreground text-center text-2xl font-bold outline-none right-[75%] top-[70%]"
      />

      {/* Label for inner input - right side */}
      <label className="absolute right-[120%] bottom-[0%] text-sm font-semibold text-foreground">
        {lowerLabel}
      </label>
    </div>
  );
};

export default EnduranceEspoirCircle;
