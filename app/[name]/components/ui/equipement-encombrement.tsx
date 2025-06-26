const EquipementRow = () => {
  return (
    <div className="flex gap-x-4">
      <label htmlFor="">Armure</label>
      <input type="text" className="w-[250px] outline-none text-xl" />
      <label htmlFor="">enc.</label>
      <input type="text" className="w-[50px] outline-none text-xl" />
    </div>
  );
};

export default EquipementRow;
