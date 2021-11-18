import React, { useState } from "react";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { Wordmark } from "../logo/Wordmark";
import { ColorModeToggle } from "./ColorModeToggle";
import { Header } from "./Header";

export const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleColorMode = (color: string) => {
    localStorage.setItem("color-mode", color);
  };

  return (
    <nav className="bg-primary sticky top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between">
        <div className="flex items-center justify-between h-screen-10">
          <div className="items-center sm:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-tertiary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <Menu
                className="block h-6 w-6"
                onClick={() => setOpenMenu((state) => !state)}
              />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Link to="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <div className="py-1 hidden sm:block h-8 w-auto self-end">
                  <Wordmark />
                </div>
              </div>
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Header />
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:hidden h-8 w-auto items-center self-center">
          <Logo />
        </div>
        <ColorModeToggle />
      </div>

      {openMenu && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Header />
          </div>
        </div>
      )}
    </nav>
  );
};
