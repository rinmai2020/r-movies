import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "modules/Authentication/slices/authSlice";
import { Twirl as Hamburger } from "hamburger-react";

import "./header.scss";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";

import { FiLogOut } from "react-icons/fi";

const Header = () => {
	const [isOpen, setOpen] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
		navigate("/");
	};

	const menuItem =
		user?.maLoaiNguoiDung === "QuanTri"
			? [
					{
						label: (
							<>
								<span style={{ lineHeight: "25px", marginRight: "10px" }}>
									<AiOutlineUser />
								</span>
								<Link
									to="/user"
									style={{ textDecoration: "none", fontWeight: "500" }}
								>
									Thông tin cá nhân
								</Link>
							</>
						),
						key: "0",
					},
					{
						label: (
							<>
								<span style={{ lineHeight: "25px", marginRight: "10px" }}>
									<AiOutlineSetting />
								</span>
								<Link
									style={{ textDecoration: "none", fontWeight: "500" }}
									to="/admin"
								>
									Quản trị
								</Link>
							</>
						),
						key: "1",
					},
					{
						type: "divider",
					},
					{
						label: (
							<>
								<span style={{ lineHeight: "25px", marginRight: "10px" }}>
									<FiLogOut />
								</span>
								<a
									style={{ textDecoration: "none", fontWeight: "500" }}
									href="#"
									onClick={handleLogout}
								>
									Đăng xuất
								</a>
							</>
						),
						key: "3",
					},
			  ]
			: [
					{
						label: (
							<>
								<span style={{ lineHeight: "25px", marginRight: "10px" }}>
									<AiOutlineUser />
								</span>
								<Link
									to="/user"
									style={{ textDecoration: "none", fontWeight: "500" }}
								>
									Thông tin cá nhân
								</Link>
							</>
						),
						key: "0",
					},
					{
						type: "divider",
					},
					{
						label: (
							<>
								<span style={{ lineHeight: "25px", marginRight: "10px" }}>
									<FiLogOut />
								</span>
								<a
									style={{ textDecoration: "none", fontWeight: "500" }}
									href="#"
									onClick={handleLogout}
								>
									Đăng xuất
								</a>
							</>
						),
						key: "3",
					},
			  ];

	const menu = <Menu items={menuItem} />;

	return (
		<>
			{/* desktop */}
			<div className="header">
				<Link style={{ textDecoration: "none" }} to="/">
					<h1 className="logo">R.MOVIE</h1>
				</Link>

				<div className="menu">
					<Link to="/">Trang Chủ</Link>
					<a href="#showing">Lịch Chiếu</a>
					<a href="#cinema">Cụm Rạp</a>
					<a href="#footer">Liên Hệ</a>
				</div>

				{user ? (
					<div className="logout">
						<Avatar
							style={{
								backgroundColor: "#dc3545",
							}}
						>
							{user.taiKhoan.slice(0, 1).toUpperCase()}
						</Avatar>
						<p className="name">{user.taiKhoan}</p>
						<Dropdown overlay={menu} trigger={["click"]}>
							<a onClick={(e) => e.preventDefault()}>
								<Space>
									<DownOutlined style={{ color: "#999", fontSize: "18px" }} />
								</Space>
							</a>
						</Dropdown>
					</div>
				) : (
					<div className="auth">
						<div className="btn">
							<Avatar icon={<UserOutlined />} />
							<Link to="/login" className="signin">
								Đăng Nhập
							</Link>
						</div>
						<div className="btn">
							<Avatar icon={<UserOutlined />} />
							<Link to="/register" className="register">
								Đăng Ký
							</Link>
						</div>
					</div>
				)}

				<div className="menu-icon">
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			</div>

			{/* mobile */}
			<div
				style={{ display: isOpen ? "block" : "none" }}
				className="overlay-mobile"
				onClick={() => setOpen(false)}
			></div>

			<div
				style={{ transform: isOpen ? "translateX(0)" : "translateX(-101%)" }}
				className="header-mobile"
			>
				<Link style={{ textDecoration: "none" }} to="/" className="logo-mobile">
					<h1>R.MOVIE</h1>
				</Link>

				{user ? (
					<div className="user-mobile">
						<div className="logout-mobile">
							<Avatar
								style={{
									backgroundColor: "#dc3545",
								}}
							>
								{user.taiKhoan.slice(0, 1).toUpperCase()}
							</Avatar>
							<p className="name-mobile">{user.taiKhoan}</p>
							<Dropdown overlay={menu} trigger={["click"]}>
								<a onClick={(e) => e.preventDefault()}>
									<Space>
										<DownOutlined style={{ color: "#999", fontSize: "18px" }} />
									</Space>
								</a>
							</Dropdown>
						</div>
					</div>
				) : (
					<div className="auth-mobile">
						<div className="btn-mobile">
							<Avatar icon={<UserOutlined />} />
							<Link to="/login" className="signin-mobile">
								Đăng Nhập
							</Link>
						</div>
						<div className="btn-mobile">
							<Avatar icon={<UserOutlined />} />
							<Link to="/register" className="register-mobile">
								Đăng Ký
							</Link>
						</div>
					</div>
				)}

				<div className="menu-mobile">
					<Link to="/">Trang Chủ</Link>
					<a href="#showing">Lịch Chiếu</a>
					<a href="#cinema">Cụm Rạp</a>
					<a href="#footer">Liên Hệ</a>
				</div>
			</div>
		</>
	);
};

export default Header;
