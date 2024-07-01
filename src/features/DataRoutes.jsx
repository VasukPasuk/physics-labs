import {AreasPage, CarsAnalogyPage, DiodsPage, VolumeChartsPage} from "../pages/pages";


const DataRoutes = [
	{
		route: "/cars",
		element: <CarsAnalogyPage/>,
		linkText: "Провідність на машинках",
	},
	{
		route: "/areas",
		element: <AreasPage/>,
		linkText: "Графіки кремнієвих/германієвих діодів",
	},
	{
		route: "/diods",
		element: <DiodsPage/>,
		linkText: "Потік струму в діодах",
	},
	{
		route: "/volume-charts",
		element: <VolumeChartsPage/>,
		linkText: "Об'ємні графіки",
	},
]

export default DataRoutes