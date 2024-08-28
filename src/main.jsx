import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './components/App'
import Shop from './components/Shop'
import './index.css'

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
