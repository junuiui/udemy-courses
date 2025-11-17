import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

// http://example.com/path

// router goes into RouterProvider
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement : <ErrorPage />,
    children: [
    //   { path: '/', element: <HomePage /> },
      { index: true, element: <HomePage /> },
      { path: '/products', element: <ProductPage /> },
      { path: '/products/:id', element: <ProductDetailPage />} // dynamically adding? -> dynamic path segment
    ]
  },

  // {} // more... pages
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
