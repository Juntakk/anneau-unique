"use client";

import { useState } from "react";

const MainPage = ({ name }: { name: string }) => {
  const [nameField, setNameField] = useState(
    name.charAt(0).toUpperCase() + name.slice(1)
  );
  return (
    <div className="bg-green-900 min-h-screen text-foreground flex p-6">
      <div className="space-x-4">
        <label htmlFor="name" className="text-3xl font-bold">
          Nom
        </label>
        <input
          type="text"
          value={nameField}
          className="text-3xl outline-none max-w-[140px]"
          onChange={(e) => {
            setNameField(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default MainPage;
