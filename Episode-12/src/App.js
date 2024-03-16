import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));
console.log(<Body />);

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Dhruv Mehta",
    };
    setUserInfo(data);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
      <div className="app">
        {/* Header */}
        <Header />
        <Outlet />
        {console.log("outlet - ", <Outlet />)}
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <About />{" "}
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
