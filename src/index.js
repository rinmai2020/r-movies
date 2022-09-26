import React from "react";
import ReactDOM from "react-dom/client";

// router
import { BrowserRouter } from "react-router-dom";

// antd & bootstrap & scss
import "antd/dist/antd.min.css";
import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// redux
import { Provider } from "react-redux";
import store from "./store";

// swiper
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
