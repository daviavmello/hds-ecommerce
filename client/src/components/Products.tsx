import { useState, useEffect } from "react";
import { Truck, Plus, Minus } from "react-feather";
import { getProducts } from "../api/storeHelper";
import { useStore } from "../context/storeContext";
import { Button } from "./Button";

export const Products: React.FC = () => {
  const { setBadRequest } = useStore();
  const [products, setProducts] = useState<Array<any>>([]);
  const [cart, setCart] = useState<Array<any>>([]);

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

  const handleOperation = (
    value: { ProductID: number },
    operationType: string
  ) => {
    const id = value.ProductID;
    setProducts((state) => {
      return state.map((v) =>
        v.ProductID === id
          ? {
              ...v,
              count: operationType === "addition" ? v.count++ : v.count--,
            }
          : v
      );
    });
  };

  const addToCart = (value: {}) => {
    setCart((state) => [...state, { ...value }]);
  };

  const removeFromCart = (value: { ProductID: number }) => {
    const removedProduct = value.ProductID;
    setCart((state) => {
      const productIndex = state.findIndex(
        (v) => v.ProductID === removedProduct
      );
      return state.filter((v, i) => i !== productIndex);
    });
  };

  const handleAdd = (value: { ProductID: number }, operationType: string) => {
    handleOperation(value, operationType);
    addToCart(value);
  };

  const handleRemove = (
    value: { ProductID: number },
    operationType: string
  ) => {
    handleOperation(value, operationType);
    removeFromCart(value);
  };

  const handleShipping = () => {
    return cart.map((v) => v.DeliveryFee).sort((a, b) => b - a)[0];
  };

  const handleTotal = () => {
    const allPrices = cart.map(({ Price }) => Price);

    const totalPrice = allPrices.reduce((prev, curr) => prev + curr);
    return new Intl.NumberFormat().format(totalPrice + handleShipping());
  };

  return (
    <div className="py-6 rounded-xl mb-6">
      <h3 className="font-bold text-left text-accent md:px-8 px-2">Shop</h3>
      <div className="pt-4 md:px-8 px-2">
        {products.map((v, i) => (
          <div key={i} className="text-left py-4 border-b border-secondary">
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-bold text-tertiary leading-none mb-2">
                  {v.ProductDesc}
                </p>
                <div className="flex justify-start items-center text-sm bg-tertiary w-fit-content rounded-full px-3">
                  <Truck className="mr-2 w-3 text-primary" />
                  <p className="text-primary">${v.DeliveryFee}</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="pr-8 flex">
                  {" "}
                  <button
                    onClick={() => handleRemove(v, "subtraction")}
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
                  <button onClick={() => handleAdd(v, "addition")}>
                    <Plus className="text-medium w-4" />
                  </button>
                </div>{" "}
                <span className="text-sm font-medium">${v.Price}</span>
              </div>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <>
            <div className="flex flex-row justify-between py-4">
              <p className="font-bold text-medium leading-none mb-2">
                Shipping:
              </p>
              <p className="font-bold text-medium leading-none mb-2">
                ${handleShipping()}
              </p>
            </div>
            <div className="flex flex-row justify-between py-4">
              <p className="font-bold text-medium leading-none mb-2">Total:</p>
              <p className="font-bold text-medium leading-none mb-2">
                ${handleTotal()}
              </p>
            </div>
            <div className="my-4">
              <Button primary large value={"checkout"} url={`/checkout`} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
