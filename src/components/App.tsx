import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Main page</div>,
    },
    {
      path: '/movie',
      element: <div>Movie page</div>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
