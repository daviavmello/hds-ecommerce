import { useStore } from "../context/storeContext";

export const Checkout: React.FC = () => {
  const { store } = useStore();

  console.log(store);

  const handleShipping = () => {
    return store.map((v) => v.DeliveryFee).sort((a, b) => b - a)[0];
  };

  const handleTotal = () => {
    const allPrices = store.map(({ Price }) => Price);

    const totalPrice = allPrices.reduce((prev, curr) => prev + curr, 0);
    return new Intl.NumberFormat().format(totalPrice + handleShipping());
  };
  return (
    <div className="py-6 rounded-xl mb-6">
      <h3 className="font-bold text-left text-accent md:px-8 px-2">Checkout</h3>
      <div className="pt-4 md:px-8 px-2">
        {store.map((v, i) => (
          <div key={i} className="text-left py-4 border-b border-secondary">
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-bold text-tertiary leading-none mb-2">
                  {v.ProductDesc}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="pr-8 flex"> </div>{" "}
                <span className="text-sm font-medium">${v.Price}</span>
                <span className="text-sm font-medium ml-2">x{v.count}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-row justify-between py-4">
          <p className="font-bold text-medium leading-none mb-2">Shipping:</p>
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
      </div>
    </div>
  );
};