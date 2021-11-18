import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <Link to="/about">
        <div className="text-tertiary px-3 py-2 rounded-md text-sm font-medium">
          About
        </div>
      </Link>
      <Link to="/manufactures">
        <div className="text-tertiary px-3 py-2 rounded-md text-sm font-medium">
          Manufactures
        </div>
      </Link>
      <Link to="/services">
        <div className="text-tertiary px-3 py-2 rounded-md text-sm font-medium">
          Services
        </div>
      </Link>
      <Link to="/shop">
        <div className="text-tertiary px-3 py-2 rounded-md text-sm font-medium">
          Shop
        </div>
      </Link>
    </>
  );
};
