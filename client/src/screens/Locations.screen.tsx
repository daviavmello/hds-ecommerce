export const Locations: React.FC = () => (
  <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 pt-4 bg-primary">
    <div className="hidden md:inline-block bg-mapImg bg-cover shadow-md"></div>
    <div>
      <h3 className="font-bold text-left text-accent">Locations</h3>
      <div className="my-4">
        <h4 className="font-bold text-tertiary">Phoenix</h4>
        <p className="text-justify">
          101 Sedalia Dr. Phoenix, AZ 85001.
          <br />
          Phone: 602-KITCHEN. Fax: 602-555-1212
        </p>
      </div>

      <div className="my-4">
        <h4 className="font-bold text-tertiary">Scottsdale</h4>
        <p className="text-justify">
          205 Samoa Dr. Scottsdale, AZ 82485.
          <br />
          Phone: 602-KITCHEN. Fax: 607-222-1215
        </p>
      </div>

      <div className="my-4">
        <h4 className="font-bold text-tertiary">Tucson</h4>
        <p className="text-justify">
          308 Geneva Rd. Tucson, AZ 81456.
          <br />
          Phone: 602-KITCHEN. Fax: 624-355-1215
        </p>
      </div>

      <div className="my-4">
        <h4 className="font-bold text-tertiary">Las Vegas</h4>
        <p className="text-justify">
          1010 Pierce Dr. Las Vegas, NE 74568.
          <br />
          Phone: 602-KITCHEN. Fax: 308-874-1219
        </p>
      </div>

      <div className="my-4">
        <h4 className="font-bold text-tertiary">Albuquerque</h4>
        <p className="text-justify">
          900 Mello Dr. Albuquerque, NM 68999.
          <br />
          Phone: 602-KITCHEN. Fax: 300-754-1220
        </p>
      </div>
    </div>
  </div>
);
