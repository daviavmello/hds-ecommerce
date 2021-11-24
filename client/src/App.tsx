import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { StoreContext } from "./context/storeContext";
import { Navbar } from "./components/Navbar";
import { Home } from "./screens/Home.screen";
import { About } from "./screens/About.screen";
import { Manufactures } from "./screens/Manufactures.screen";
import { Shop } from "./screens/Shop.screen";
import { Checkout } from "./screens/Checkout.screen";
import { Receipt } from "./screens/Receipt.screen";
import { Services } from "./screens/Services.screen";
import { Footer } from "./components/Footer";
import { FAQ } from "./screens/FAQ.screen";
import { Locations } from "./screens/Locations.screen";

const App: React.FC = () => {
  const [colorMode, setColorMode] = useState<string>(
    localStorage.getItem("color-module") || "light"
  );
  const [badRequest, setBadRequest] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [store, setStore] = useState<Array<any>>([]);

  return (
    <StoreContext.Provider
      value={{
        colorMode,
        setColorMode,
        badRequest,
        setBadRequest,
        loading,
        setLoading,
        store,
        setStore,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/manufactures" element={<Manufactures />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
        <Footer />
      </Router>
    </StoreContext.Provider>
  );
};

export default App;
