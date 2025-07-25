import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import Orders from "./Pages/Orders/Orders";
import ProductsDetails from "./Pages/ProductsDetails/ProductsDetails";
import SearchProducts from "./Pages/SearchProducts/SearchProducts";
import Brands from "./Pages/Brands/Brands";
import Cart from "./Pages/Cart/Cart";
import Cheackout from "./Pages/Cheackout/Cheackout";
import Favourites from "./Pages/Favourites/Favouritesjsx";
import WishList from "./Pages/Wishlist/Wishlist";
import NotFound from "./Pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import ProductProvider from "./context/Product.context";
import CategoriesProvider from "./context/categories.context";
import AuthProvider from "./context/auth.context";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./context/Cart.context";
import WishlistProvider from "./context/Wishlist.context";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <ProductsDetails />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signUp",
          element: <SignUp />,
        },
        {
          path: "forgotPassword",
          element: <ForgotPassword />,
        },
        {
          path: "verifyEmail",
          element: <VerifyEmail />,
        },
        {
          path: "orders",
          element: (
            <ProtectedRoute>
              <Orders />,
            </ProtectedRoute>
          ),
        },
        {
          path: "product/:id",
          element: <ProductsDetails />,
        },
        {
          path: "searchProducts",
          element: <SearchProducts />,
        },
        {
          path: "brands",
          element: <Brands />,
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "cheackout",

          element: (
            <ProtectedRoute>
              <Cheackout />
            </ProtectedRoute>
          ),
        },
        {
          path: "favourites",
          element: <Favourites />,
        },
        {
          path: "wishList",

          element: (
            <ProtectedRoute>
              <WishList />,
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <ProductProvider>
              <CategoriesProvider>
                <RouterProvider router={router} />
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  closeButton={false}
                  closeOnClick={true}
                />
              </CategoriesProvider>
            </ProductProvider>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </>
  );
}
export default App;
