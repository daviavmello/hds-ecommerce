interface IButton {
  primary?: boolean;
  secondary?: boolean;
  value: string;
}
export const Button: React.FC<IButton> = ({ primary, secondary, value }) => {
  return (
    <div
      className={`inline-flex shadow border-2 capitalize rounded-full ${
        primary ? `border-accent` : `border-accent`
      }`}
    >
      <a href="#" className={`text-tertiary font-bold py-2 px-6 `}>
        {value}
      </a>
    </div>
  );
};
