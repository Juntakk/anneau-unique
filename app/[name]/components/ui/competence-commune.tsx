const Competence = ({ label }: { label?: string }) => {
  return (
    <div className="flex items-center gap-2">
      {label && (
        <label className="min-w-[120px] text-md font-semibold text-foreground">
          {label}
        </label>
      )}
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          type="checkbox"
          className="w-5 h-5 border-2 border-foreground rounded-sm transition duration-150 appearance-none checked:bg-amber-900 hover:cursor-pointer"
        />
      ))}
    </div>
  );
};
export default Competence;
