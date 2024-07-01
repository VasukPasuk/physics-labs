import {createBrowserRouter} from "react-router-dom";
import {
  AreasPage,
  ChartPage,
  CarsAnalogyPage,
  DiodsPage,
  VolumeChartsPage,
  SelectAnimation
} from '../pages/pages';

import Layout from "../Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DataRoutes from "../features/DataRoutes";


const router = createBrowserRouter([
  {
    path: '/',
    element: <SelectAnimation/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [...DataRoutes].map(({element, route}) => ({
      path: route,
      element,
      errorElement: <ErrorPage/>,
    }))
  },
])



export default router;