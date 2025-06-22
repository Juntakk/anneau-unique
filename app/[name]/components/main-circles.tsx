const MainCircle = ({
  isFirst,
  attribute,
}: {
  isFirst: boolean;
  attribute: string;
}) => {
  return (
    <div className="relative w-[140px] h-[140px]">
      {/* Label for outer input - left center */}
      <label className="text-2xl mb-4 flex justify-center items-center font-semibold text-foreground">
        {attribute}
      </label>

      {/* Outer Circle Input */}
      <input
        type="text"
        maxLength={1}
        className="w-full h-full rounded-full border-2 border-foreground text-center text-4xl font-bold bg-transparent outline-none"
      />

      {/* Inner Circle Input */}
      {isFirst && (
        <>
          {/* Inner Circle Input */}
          <input
            type="text"
            maxLength={1}
            className="absolute w-[70px] h-[70px] rounded-full border-2 border-foreground text-center text-2xl font-bold bg-transparent outline-none right-[80%] top-[20%]"
          />

          {/* Label for inner input - absolutely positioned near it */}
          <label className="absolute right-[135%] top-[20%] translate-y-[70%] text-sm font-semibold text-foreground">
            Total
          </label>
        </>
      )}

      {/* Label for inner input - right side */}
    </div>
  );
};

export default MainCircle;
