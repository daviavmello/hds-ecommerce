interface IButton {
  primary?: boolean;
  secondary?: boolean;
  value: string;
}
export const Button: React.FC<IButton> = ({ primary, secondary, value }) => {
  return (
    <div
      className={`shadow capitalize rounded-full w-fit-content self-center text-center py-2 px-6 cursor-pointer
      ${primary && `bg-lightYellow text-accent`}
      ${secondary && `border-2 border-accent text-tertiary`} 
      }`}
    >
      <div className={`font-bold`}>{value}</div>
    </div>
  );
};
