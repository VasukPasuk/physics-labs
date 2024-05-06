import {createBrowserRouter} from "react-router-dom";
import {AreasPage, ChartPage, CarsAnalogyPage, DiodsPage} from '../pages/pages';
import Layout from "../Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/cars',
        element: <CarsAnalogyPage/>,
      },
      {
        path: '/areas',
        element: <AreasPage/>,
      },
      {
        path: '/chart',
        element: <ChartPage/>,
      },
      {
        path: '/diods',
        element: <DiodsPage/>
      }
    ]
  },
  
])

export default router;