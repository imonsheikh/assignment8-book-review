import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Contact from './components/Contact/Contact.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import Layout from './components/Layout/Layout.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
       path: "/",
       element: <Home></Home> 
      },
      {
        path: 'book/:id',
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`/books.json/${params.id}`)
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>
      }
      
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
