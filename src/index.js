import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import {CssBaseline} from "@mui/material";
import './global.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<CssBaseline/>
		<RouterProvider router={router}/>
	</>
);
