import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; // layout with Scene and Outlet
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Signin from '../pages/Signin';

// import About from '../pages/About'; // example page

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App contains <Scene /> and <Outlet />
    children: [
      {
        index: true, // route for "/"
        element: <Home />,
      },
      {
        path:'/products',
        element:<ProductDetails />
      },
      {
        path:'/login',
        element:<Login />

      },
      {
        path:'/signin',
        element:<Signin />
      },

      // add more nested routes here
    ],
  },
]);

export default router;
