import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HompePage from './pages/Home';
import ProductPage from './pages/Product';

// http://example.com/path

// router goes into RouterProvider
const router = createBrowserRouter([
  { path: '/', element: <HompePage /> },
  { path: '/products', element: <ProductPage /> },
  // {} // more... pages
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
