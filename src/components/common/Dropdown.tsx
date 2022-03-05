import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [optionClicked, setOptionClicked] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-gray-750 text-3xl"
        onClick={() => setOptionClicked(!optionClicked)}
      >
        <SlOptions />
      </button>
      {optionClicked && (
        <div className="w-[220px] absolute bg-[#282828] py-3 px-3 rounded right-0 top-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
