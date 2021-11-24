import { useStore } from "../context/storeContext";

interface IButton {
  primary?: boolean;
  secondary?: boolean;
  value: string;
  url?: string;
  addToCart?: Array<any>;
  large?: boolean;
  small?: boolean;
}
export const Button: React.FC<IButton> = ({
  primary,
  secondary,
  value,
  url,
  addToCart,
  large,
  small,
}) => {
  const { setStore } = useStore();
  return (
    <button
      {...(url && { onClick: () => window.open(`http://${url}`, "_blank") })}
      {...(addToCart && { onClick: () => setStore(addToCart) })}
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
