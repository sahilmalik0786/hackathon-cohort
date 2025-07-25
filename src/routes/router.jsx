import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; 
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import Products from '../pages/Products';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path:'/product/:name/:db',
        element:<ProductDetails />
      },
      {
        path:'/login',
        element:<Login />

      },
      {
        path:'/signup',
        element:<Signin />
      },
      {
        path:'/products',
        element:<Products />
      }


    ],
  },
]);

export default router;
