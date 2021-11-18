export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <h2 className="text-3xl leading-12 font-bold tracking-tight text-tertiary sm:text-4xl sm:leading-10 ">
          It all starts with <br />a great story.
        </h2>
        <div className="md:block hidden">&nbsp;</div>
        <div className="md:block hidden">&nbsp;</div>
        <p className="my-4 text-medium text-justify">
          HDS started as a remodeling effort by Emily and her husband Joe back
          in May 2007. They had contracted to do work for some family and
          friends that wanted to upgrade their existing homes (bathrooms and
          kitchens are their specialty). This included providing design work,
          and upgrades to kitchens and baths. Emily and Joe quickly determined
          that there was a tremendous need for this service in the greater
          Phoenix/Scottsdale, AZ area.
        </p>
        <p className="my-4 text-medium text-justify">
          They applied for a business license and opened Home Design Solutions
          as an LLC out of a small store location they rented at 101 Sedalia
          Drive, Phoenix, AZ 85001. The first store location included some
          sample cabinets and appliances that they would later become regional
          distributors for. Both Joe and Emily became General Contractors in
          2007 and all their bath and kitchen design specialists that have been
          hired since have acquired kitchen and bath design certifications.
        </p>
      </div>
    </div>
  );
};
// grid-flow-col
