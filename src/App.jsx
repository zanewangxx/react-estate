import HomePage from './pages/homePage/homePage';
import Layout from './pages/layout/Layout';
import ListPage from './pages/listPage/ListPage';
import Profile from './pages/profile/Profile';
import SinglePage from './pages/singlePage/SinglePage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage />
        },
        {
          path:"/list",
          element:<ListPage />
        },
        {
          path:"/:id",
          element:<SinglePage />
        },
        {
          path:"/profile",
          element:<Profile />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App