import { useState, useEffect } from "react";
import { Truck, Plus, Minus } from "react-feather";
import { Link } from "react-router-dom";
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
    const newState = [...products];
    const currIndex = newState.findIndex((v) => v.ProductID === id);
    const currObj = newState[currIndex];
    if (operationType === "addition") currObj.count += 1;
    else currObj.count -= 1;
    setProducts(newState);
  };

  const addToCart = (value: { ProductID: number }) => {
    const id = value.ProductID;
    const newCart = [...cart];
    const currObj = newCart.find((v) => v.ProductID === id);
    if (currObj) {
      currObj.count += 1;
      setCart(newCart);
    } else {
      setCart((state) => [...state, { ...value }]);
    }
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

  return (
    <div className="py-6 rounded-xl mb-6">
      <h3 className="font-bold text-left text-accent md:px-8 px-2">Shop</h3>
      <div className="pt-4 md:px-8 px-2">
        {products.map((v, i) => {
          return (
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
          );
        })}
        {cart.length > 0 && (
          <>
            <div className="my-4">
              <Link to="/checkout">
                <Button primary large value={"checkout"} addToCart={cart} />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
