import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './components/App'
import Shop from './components/Shop'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import { CartProvider } from './components/CartContext'
import './index.css';

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
