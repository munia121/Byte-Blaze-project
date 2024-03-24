import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../src/Layout/MainLayout";
import Home from "../../src/pages/Home";
import Blogs from "../../src/pages/Blogs";
import Blog from "../../src/pages/Blog";
import BookMarks from "../../src/pages/BookMarks";
import Content from "../../src/component/Content";
import Author from "../../src/component/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>,
          loader:() => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
  
        {
          path:'/blog/:id',
          element:<Blog></Blog>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
              index: true,
              element:<Content></Content>,
              loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
              path:'author',
              element:<Author></Author>,
              loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
  
        {
          path:'/bookmarks',
          element: <BookMarks></BookMarks>
        }
      ]
    },
    
  ]);
  