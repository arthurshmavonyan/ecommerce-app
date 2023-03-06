import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Root from "./pages/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: "products", element: <ProductList />},
            { path: "cart", element: <Cart /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;