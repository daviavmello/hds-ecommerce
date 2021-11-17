import { Button } from "./Button";

export const Jumbotron: React.FC = () => (
  <div className="max-w-screen-lg bg-white rounded-lg mx-auto text-center py-12 mt-4">
    <h2 className="text-3xl leading-9 font-bold tracking-tight text-tertiary sm:text-4xl sm:leading-10">
      Make home feel like your home.
    </h2>
    <div className="mt-8 flex justify-center">
      <Button primary value={"see more"} />
    </div>
  </div>
);
