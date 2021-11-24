interface IButton {
  primary?: boolean;
  secondary?: boolean;
  value: string;
  url?: string;
  onClick?: () => void;
  large?: boolean;
  small?: boolean;
}
export const Button: React.FC<IButton> = ({
  primary,
  secondary,
  value,
  url,
  onClick,
  large,
  small,
}) => {
  return (
    <button
      {...(url && { onClick: () => window.open(`http://${url}`, "_blank") })}
      {...(onClick && { onClick: onClick })}
      className={`shadow capitalize rounded-full w-fit-content self-center text-center cursor-pointer mx-auto 
      ${small && `py-1 px-3`}
      ${large && `py-2 px-6`}
      ${primary && `bg-lightYellow text-accent`}
      ${secondary && `border-2 border-accent text-accent`} 
      }`}
    >
      <div className={`font-bold`}>{value}</div>
    </button>
  );
};
