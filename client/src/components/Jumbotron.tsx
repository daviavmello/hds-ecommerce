import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Jumbotron: React.FC = () => (
  <div className="h-screen-90 bg-homeImg bg-cover rounded-xl mx-auto text-center flex flex-col justify-center">
    <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10 ">
      Bringing that at home feeling.
    </h2>
    <h4 className="my-4">Explore new design solutions for your home today.</h4>
    <Link to="/about">
      <Button primary large value={"see more"} />
    </Link>
  </div>
);
