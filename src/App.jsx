import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

// layouts and pages
import RootLayout from './layouts/RootLayout';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import GridListItem from './pages/GridListItem';
import Profile from './pages/Profile';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="grid" element={<GridListItem />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
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
