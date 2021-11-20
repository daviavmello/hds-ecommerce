import { useState, useEffect } from "react";
import { Truck, Plus, Minus } from "react-feather";
import { getProducts } from "../api/storeHelper";
import { useStore } from "../context/storeContext";

export const Products: React.FC = () => {
  const { setBadRequest } = useStore();
  const [products, setProducts] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();

      if (res.status >= 400) {
        setBadRequest(true);
        setTimeout(() => {
          setBadRequest(false);
          fetchProducts();
        });
      }
      res.forEach((v: any) => {
        setProducts((state) => [...state, { ...v, count: 0 }]);
      });
    };
    fetchProducts();
  }, [setBadRequest]);

  const handleOperation = (id: number, operation: string) => {
    setProducts((state) => {
      return state.map((v, i) =>
        v.ProductID === id
          ? {
              ...v,
              count: operation === "addition" ? v.count++ : v.count--,
            }
          : v
      );
    });
  };

  return (
    <div className="py-6 rounded-xl mb-6">
      <h3 className="font-bold text-left text-accent md:px-8 px-2">Shop</h3>
      <div className="grid grid-cols-1 pt-4 md:px-8 px-2">
        {products.map((v, i) => (
          <div key={i} className="text-left py-4 border-b border-secondary">
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-bold text-tertiary">{v.ProductDesc}</p>
                <div className="flex justify-start items-center text-sm">
                  <Truck className="mr-2 w-3 text-medium" />
                  <p>${v.DeliveryFee}</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="pr-8 flex">
                  {" "}
                  <button
                    onClick={() => handleOperation(v.ProductID, "subtraction")}
                    disabled={v.count === 0 ? true : false}
                  >
                    <Minus className="text-medium w-4" />
                  </button>
                  <input
                    type="text"
                    className="focus:outline-none bg-secondary h-6 w-8 rounded text-sm px-2 mx-2 text-center"
                    readOnly
                    value={v.count}
                  />{" "}
                  <button
                    onClick={() => handleOperation(v.ProductID, "addition")}
                  >
                    <Plus className="text-medium w-4" />
                  </button>
                </div>{" "}
                <span className="text-sm font-medium">${v.Price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
