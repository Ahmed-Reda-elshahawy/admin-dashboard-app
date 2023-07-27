import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import './Style/App.scss'
// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Product from './pages/product/Product';
import Login from "./pages/login/Login";
import ProductsList from "./pages/products/ProductsList";


// const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            {/* <QueryClientProvider client={queryClient}> */}
            <Outlet />
            {/* </QueryClientProvider> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <ProductsList />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;