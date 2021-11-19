interface IButton {
  primary?: boolean;
  secondary?: boolean;
  value: string;
  url?: string;
  large?: boolean;
  small?: boolean;
}
export const Button: React.FC<IButton> = ({
  primary,
  secondary,
  value,
  url,
  large,
  small,
}) => {
  return (
    <div
      className={`shadow capitalize rounded-full w-fit-content self-center text-center cursor-pointer mx-auto 
      ${small && `py-1 px-3`}
      ${large && `py-2 px-6`}
      ${primary && `bg-lightYellow text-accent`}
      ${secondary && `border-2 border-accent text-accent`} 
      }`}
      onClick={() => window.open(`http://${url}`, "_blank")}
    >
      <div className={`font-bold`}>{value}</div>
    </div>
  );
};
