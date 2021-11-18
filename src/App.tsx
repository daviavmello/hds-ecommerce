import {
  Routes,
  Route,
  useRoutes,
  BrowserRouter as Router,
} from "react-router-dom";
import { useState } from "react";
import { StoreContext } from "./context/storeContext";
import { Navbar } from "./components/Navbar";
import { Home } from "./screens/Home.screen";
import { About } from "./screens/About.screen";

const App: React.FC = () => {
  const [colorMode, setColorMode] = useState<string>(
    localStorage.getItem("color-module") || "light"
  );
  const [badRequest, setBadRequest] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const App = () => {
    let routes = useRoutes([{ path: "/", element: <Home /> }, { path: "/about", element: <About /> }]);
    return routes;
  };

  return (
    <StoreContext.Provider
      value={{
        colorMode,
        setColorMode,
        badRequest,
        setBadRequest,
        loading,
        setLoading,
      }}
    >
      <Navbar />
      <Router>
        <App />
      </Router>
    </StoreContext.Provider>
  );
};

export default App;
