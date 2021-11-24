import { Check } from "react-feather";

export const Receipt: React.FC = () => {
  return (
    <div className="h-screen-90 bg-lightYellow rounded-xl mx-auto text-center flex flex-col justify-center">
      <h3 className="font-bold text-center text-accent md:px-8 px-2">
        Confirmation
      </h3>
      <h4 className="my-4 flex flex-row align-center self-center">
        <Check className="mr-2 text-success" /> Thank you for your purchase!
      </h4>
    </div>
  );
};
