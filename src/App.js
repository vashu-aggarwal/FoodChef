import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contactus from "./components/Contactus";
import ErrorElement from "./components/ErrorElement";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// AppLayout component - provides layout with Header, Footer, and Outlet
const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <ToastContainer /> {/* Toast notifications */}
                <Outlet />  {/* This is where nested routes will be rendered */}
                <Footer />
            </div>
        </Provider>
    );
};

// Define routes for the application
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
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contactus />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <ErrorElement />,
    },
]);

// Use RouterProvider to apply the routes to the application
const App = () => {
  return <RouterProvider router={appRouter} />;
};

// Export the App component as the default export
export default App;
