import { Facebook, Linkedin, Twitter } from "react-feather";
import { Link } from "react-router-dom";
import { Wordmark } from "../logo/Wordmark";

export const Footer: React.FC = () => (
  <footer className="body-font bg-primary">
    <div
      className="
      container
      px-5
      py-24
      mx-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
      flex-wrap flex-col
    "
    >
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <Link
          to="/"
          className="
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-center
          text-tertiary
        "
        >
          <Wordmark />
        </Link>
        <p className="mt-2 text-sm text-medium">Make your house a home.</p>
      </div>
      <div
        className="
        flex-grow flex flex-wrap
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
      >
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <Link to="/about">
            <h2
              className="
            title-font
            font-medium
            text-tertiary
            tracking-widest
            text-sm
            mb-3
          "
            >
              ABOUT
            </h2>
          </Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <Link to="/manufactures">
            <h2
              className="
            title-font
            font-medium
            text-tertiary
            tracking-widest
            text-sm
            mb-3
          "
            >
              MANUFACTURES
            </h2>
          </Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <Link to="/services">
            <h2
              className="
            title-font
            font-medium
            text-tertiary
            tracking-widest
            text-sm
            mb-3
          "
            >
              SERVICES
            </h2>
          </Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <Link to="/shop">
            <h2
              className="
            title-font
            font-medium
            text-tertiary
            tracking-widest
            text-sm
            mb-3
          "
            >
              SHOP
            </h2>
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-primary">
      <div
        className="
        container
        mx-auto
        py-4
        px-5
        flex flex-wrap flex-col
        sm:flex-row
      "
      >
        <p className="text-medium text-sm text-center sm:text-left">
          © 2021 Copyright: Home Design Solutions
        </p>
        <span
          className="
          inline-flex

          sm:ml-auto sm:mt-0
          mt-2
          justify-center
          sm:justify-start
        "
        >
          <Facebook
            className="text-medium"
            onClick={() =>
              window.open(
                "https://www.facebook.com/HomeDesignSolutionsinc/",
                "_blank"
              )
            }
          />

          <Twitter
            className="ml-3 text-medium"
            onClick={() =>
              window.open("https://twitter.com/homedesigning", "_blank")
            }
          />

          <Linkedin
            className="ml-3 text-medium"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/design-solutions-architecture-interior-design",
                "_blank"
              )
            }
          />
        </span>
      </div>
    </div>
  </footer>
);
