const GroupeCompetence = ({ label }: { label: string }) => {
  return (
    <div className="flex items- justify-end w-full gap-2">
      <label className="min-w-[120px] text-lg font-semibold text-foreground">
        {label}
      </label>
      {Array.from({ length: 3 }).map((_, i) => (
        <input
          key={i}
          type="checkbox"
          className="w-5 h-5 border-2 border-foreground rounded-sm transition duration-150 appearance-none checked:bg-green-700 hover:cursor-pointer"
        />
      ))}
    </div>
  );
};

export default GroupeCompetence;
