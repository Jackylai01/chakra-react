import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

/**執行api */
import { createAction } from './pages/Create';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/grid" element={<Dashboard />} />
      <Route path="/create" element={<Create />} action={createAction} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
