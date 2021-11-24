import { useEffect, useRef } from "react";

export const ColorModeToggle: React.FC = () => {
  const ref = useRef<any>(null);
  const root = window.document.documentElement;

  useEffect(() => {
    const currRef = ref.current;
    const currColorMode = localStorage.getItem("color-mode");

    if (currColorMode === "dark") {
      currRef.checked = true;
      root.classList.add("dark");
    }
  }, [root.classList]);

  const handleColorMode = () => {
    const currColorMode = localStorage.getItem("color-mode");
    if (currColorMode === "dark") {
      localStorage.setItem("color-mode", "light");
      root.classList.remove("dark");
    } else {
      localStorage.setItem("color-mode", "dark");
      root.classList.add("dark");
    }
    console.log(localStorage.getItem("color-mode"));
  };

  return (
    <div className="flex items-center">
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          onClick={() => handleColorMode()}
          ref={ref}
          type="checkbox"
          name="toggle"
          id="toggle"
          className="bg-accent border-accent mr-1 focus:ring-transparent toggle-checkbox absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block h-8 -ml-1 -mt-1 rounded-full bg-success cursor-pointer"
        ></label>
      </div>
    </div>
  );
};
