export const ColorModeToggle: React.FC = () => (
  <div className="flex items-center">
    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
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
