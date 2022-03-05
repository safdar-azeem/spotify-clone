import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "secondary",
}) => {
  return (
    <button onClick={onClick} className={`btn  ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
