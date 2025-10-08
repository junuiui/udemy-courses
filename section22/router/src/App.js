import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// http://example.com/path

// router goes into RouterProvider
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement : <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductPage /> },
    ]
  },

  // {} // more... pages
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
