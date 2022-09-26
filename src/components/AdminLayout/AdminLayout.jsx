import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Layout, Menu } from "antd";
import { logout } from "modules/Authentication/slices/authSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TitleFunction } from "utils/TitleFunction";
import "./adminLayout.scss";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}

const items = [
	getItem("User", "sub1", <UserOutlined />, [
		getItem(
			<Link style={{ textDecoration: "none" }} to="/admin/userList">
				Danh Sách User
			</Link>,
			"1"
		),
		getItem(
			<Link style={{ textDecoration: "none" }} to="/admin/addUser">
				Thêm User
			</Link>,
			"2"
		),
	]),
	getItem("Phim", "sub2", <SettingOutlined />, [
		getItem(
			<Link style={{ textDecoration: "none" }} to="/admin/movieList">
				Danh Sách Phim
			</Link>,
			"3"
		),
		getItem(
			<Link style={{ textDecoration: "none" }} to="/admin/addMovie">
				Thêm Phim
			</Link>,
			"4"
		),
	]),
];

const AdminLayout = () => {
	TitleFunction("Admin");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [collapsed, setCollapsed] = useState(false);

	const { user } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
		navigate("/login");
	};

	return (
		<div className="admin-layout">
			<Layout
				style={{
					minHeight: "100vh",
				}}
			>
				<Sider
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<div style={{ opacity: collapsed ? 0 : 1 }} className="logo-admin">
						<h1 className="logo-movie">R.MOVIE</h1>
					</div>

					<Menu
						defaultSelectedKeys={["sub1"]}
						theme="dark"
						mode="inline"
						items={items}
					/>
				</Sider>

				<Layout className="site-layout">
					<Header
						className="site-layout-background"
						style={{
							padding: 0,
						}}
					>
						<div className="logout-admin">
							<Avatar
								style={{
									backgroundColor: "#f56a00",
								}}
							>
								{user.taiKhoan.slice(0, 1).toUpperCase()}
							</Avatar>
							<p className="name">{user.taiKhoan}</p>
							<button className="logout" onClick={handleLogout}>
								Đăng Xuất
							</button>
						</div>
					</Header>

					<Content
						style={{
							margin: "0 16px",
						}}
					>
						<Breadcrumb
							style={{
								margin: "16px",
							}}
						>
							<Breadcrumb.Item>
								<Link
									style={{ textDecoration: "none" }}
									className="text-primary"
									to="/"
								>
									Home
								</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item>Admin</Breadcrumb.Item>
						</Breadcrumb>

						<div
							className="site-layout-background"
							style={{
								padding: 24,
								minHeight: 360,
							}}
						>
							<Outlet />
						</div>
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};

export default AdminLayout;
