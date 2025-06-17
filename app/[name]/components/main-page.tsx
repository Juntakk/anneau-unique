"use client";

import EditableField from "./editable-field";

const MainPage = ({ name }: { name: string }) => {
  return (
    <>
      <div>{name}</div>
      <EditableField value={1} />
    </>
  );
};

export default MainPage;
