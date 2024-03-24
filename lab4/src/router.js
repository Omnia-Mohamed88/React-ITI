import { createBrowserRouter , Outlet  } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from './pages/ProductDetalis/ProductDetalis'
import ErorrPage from './pages/ErorrPage/ErorrPage'
import RegistrationForm from './pages/Form/Form'
const router = createBrowserRouter([
    {
        element: 
            <WithoutLayout />,
        
        errorElement: <ErorrPage />,
        children: [
            {
                path: '/',
                element: <ProductList />
            },
            {
                path: '/Register',
                element: <RegistrationForm />
            },
            {
                element: <Layout />,
                children: [
                    {
                path: '/products/:productId',
                element: <ProductDetails />,
                    },
                ]
            },
        ],
    },
    {
      element: <WithoutLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
]
    
    
);
function Layout() {
    return (
      <>
        { <NavBar /> }
        <Outlet />
        {<Footer /> }
      </>
    );
  }
  
  function WithoutLayout() {
    return (
      <>
        <Outlet />
      </>
    );
  }
  export default router;

