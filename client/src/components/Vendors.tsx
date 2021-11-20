import { useState, useEffect } from "react";
import { Flag, Phone } from "react-feather";
import { getVendors } from "../api/storeHelper";
import { useStore } from "../context/storeContext";
import { Button } from "./Button";

export const Vendors: React.FC = () => {
  const { setBadRequest } = useStore();
  const [manufactures, setManufactures] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const res = await getVendors();

      if (res.status >= 400) {
        setBadRequest(true);
        setTimeout(() => {
          setBadRequest(false);
          fetchVendors();
        });
      }
      setManufactures(res);
    };
    fetchVendors();
  }, [setBadRequest]);
  return (
    <div className="py-6 bg-secondary rounded-xl mb-6">
      <h3 className="font-bold text-center text-accent">Brands</h3>
      <h4 className="text-center text-tertiary">
        We work with the best brands available.
      </h4>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 pt-4 md:px-8 px-2">
        {manufactures.map((v, i) => (
          <div
            key={i}
            className="text-center rounded-xl shadow-md px-2 bg-primary py-4 md:p-4"
          >
            <p className="text-accent">{v.Name}</p>
            <div className="py-4">
              <div className="flex justify-start items-center text-sm">
                <Phone className="mr-4 w-3 text-medium" />
                <p>{v.TelephoneNumber}</p>
              </div>
              <div className="flex justify-start items-center text-sm">
                <Flag className="mr-4 w-3 text-medium" />
                <p>
                  {v.City}, {v.State}
                </p>
              </div>
            </div>
            <Button secondary small value="See Website" url={v.Website} />
          </div>
        ))}
      </div>
    </div>
  );
};
