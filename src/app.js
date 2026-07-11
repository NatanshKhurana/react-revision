import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import RouteError from "./components/RouteError";
import UserContext from "./utils/UserContext";
import { useContext } from "react";

{
  /* Introducing react router dom and making different routes **/
}
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const App = () => {
  const userData = useContext(UserContext);
  const [userName, setUserName] = useState(userData.loggedInUser);
  useEffect(() => {
    const data = {
      name: "Natansh",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      {/* default user */}
      {/* <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> */}
        {/* Natansh */}
        <div className="app">
          {/* <UserContext.Provider value={{loggedInUser:"Anita"}}> */}
          {/* Anita */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      {/* </UserContext.Provider> */}
    </Provider>
  );
};

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1 className="text-7xl">Loading........</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1 className="text-2xl">Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <RouteError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute} />);
