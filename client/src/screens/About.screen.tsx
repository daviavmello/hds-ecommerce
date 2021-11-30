import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-8 bg-primary">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pb-8">
        <h2 className="text-3xl leading-12 font-bold tracking-tight text-tertiary sm:text-4xl sm:leading-10 ">
          It all starts with <br />a great story.
        </h2>
        <div className="md:block hidden">&nbsp;</div>
        <div className="bg-bathImg bg-cover md:block hidden">&nbsp;</div>
        <p className="my-4 text-justify">
          HDS started as a remodeling effort by Emily and her husband Joe back
          in May 2007. They had contracted to do work for some family and
          friends that wanted to upgrade their existing homes (bathrooms and
          kitchens are their specialty). This included providing design work,
          and upgrades to kitchens and baths. Emily and Joe quickly determined
          that there was a tremendous need for this service in the greater
          Phoenix/Scottsdale, AZ area.
          <br /> They applied for a business license and opened Home Design
          Solutions as an LLC out of a small store location they rented at 101
          Sedalia Drive, Phoenix, AZ 85001. The first store location included
          some sample cabinets and appliances that they would later become
          regional distributors for. Both Joe and Emily became General
          Contractors in 2007 and all their bath and kitchen design specialists
          that have been hired since have acquired kitchen and bath design
          certifications.
        </p>
      </div>
      <div className="bg-kitchenImg bg-cover bg-bottom-16 md:block hidden h-48">
        &nbsp;
      </div>
      <div className="flex flex-col md:flex-row justify-between bg-secondary mb-8 py-16 px-2 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h4 className="font-bold text-left text-accent">
            Most Frequently Asked Questions
          </h4>
          <p>We provide answers to your most common questions.</p>
        </div>
        <div className="self-center">
          <Link to="/faq">
            <Button secondary small value={"see more"} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between bg-secondary py-16 px-2 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h4 className="font-bold text-left text-accent">Our Locations</h4>
          <p>Do not hesitate to swing by and say hello!</p>
        </div>
        <div className="self-center">
          <Link to="/locations">
            <Button secondary small value={"see more"} />
          </Link>
        </div>
      </div>
    </div>
  );
};
