import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componenets/Root/Root.jsx';
import Error from './Componenets/Error/Error.jsx';
import Home from './Componenets/Home/Home.jsx';
import Deshboard from './Componenets/Deshboard/Deshboard.jsx';
import BookDetails from './Componenets/BookDetails/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/booksData.json`)
        
      },
      {
        path: '/deshboard',
        element: <Deshboard></Deshboard>
      },
      {

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
