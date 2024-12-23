import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './components/App';
import Shop from './components/Shop';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import About from './components/About';
import { CartProvider } from './components/CartContext';


const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/details/:id",
    element: <ProductPage />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/about",
    element: <About />
  }
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
