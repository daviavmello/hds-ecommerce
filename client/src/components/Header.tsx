import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <Link to="/about">
        <button className="text-tertiary px-3 py-2 rounded-md text-sm font-medium">
          About
        </button>
      </Link>
      <Link to="/manufactures">
        <button className="text-tertiary px-3 py-2 rounded-md text-sm font-medium">
          Manufactures
        </button>
      </Link>
      <Link to="/services">
        <button className="text-tertiary px-3 py-2 rounded-md text-sm font-medium">
          Services
        </button>
      </Link>
      <Link to="/shop">
        <button className="text-tertiary px-3 py-2 rounded-md text-sm font-medium">
          Shop
        </button>
      </Link>
    </>
  );
};
