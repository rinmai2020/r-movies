import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "components/Header";
import Footer from "components/Footer";

import mainLayout from "./mainLayout.module.scss";
import { TitleFunction } from "utils/TitleFunction";

const MainLayout = () => {
	TitleFunction("Movie");

	return (
		<Layout>
			<Layout.Header className={mainLayout.mainHeader}>
				<Header />
			</Layout.Header>

			<Layout.Content>
				<Outlet />
			</Layout.Content>

			<Layout.Footer className={mainLayout.mainFooter}>
				<Footer />
			</Layout.Footer>
		</Layout>
	);
};

export default MainLayout;
