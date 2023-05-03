import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  loading,
  width,
  onClick,
  padding,
}) => {
  return (
    <button
      onClick={() => {}}
      className={`relative inline-flex items-center justify-center inline-block ${padding} overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group ${
        width ? width : "w-auto"
      }`}
    >
      <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
      <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
      </span>
      <span className="relative text-white">
        {loading ? "Loading.." : title}
      </span>
    </button>
  );
};

export default Button;
