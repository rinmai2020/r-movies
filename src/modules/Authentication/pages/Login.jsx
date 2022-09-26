import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import Swal from "sweetalert2";
import { AiOutlineClose } from "react-icons/ai";
import { login } from "../../Authentication/slices/authSlice";
import { Button, Text } from "@mantine/core";
const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user, isLoading } = useSelector((state) => state.auth);
	const { handleSubmit, control } = useForm({
		defaultValues: {
			taiKhoan: "",
			matKhau: "",
		},
		mode: "onTouched",
	});
	const onSubmit = async (values) => {
		try {
			await dispatch(login(values)).unwrap();
			if (values.taiKhoan) {
				await Swal.fire({
					icon: "success",
					title: "Đăng ký thành công",
				});
				navigate("/");
			}
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: ` Tài khoản không đúng`,
			});
		}
		setTimeout(() => {
			if (user) {
				return <Navigate to="/" />;
			}
		}, 300);
	};
	return (
		<div>
			<Link style={{ display: "flex", justifyContent: "flex-end" }} to="/">
				<AiOutlineClose
					style={{
						color: "#fa5252",
						fontSize: "25px",
					}}
				/>
			</Link>
			<Text
				align="center"
				size={25}
				weight={600}
				sx={(theme) => ({
					color: "#fa5252",
					marginBottom: "10px",
				})}
			>
				Login
			</Text>
			<Form
				style={{ width: 320 }}
				radius="sm"
				onFinish={handleSubmit(onSubmit)}
				wrapperCol={{ span: 24 }}
			>
				<Controller
					sx={(theme) => ({
						border: "1px solid #fa5252",
					})}
					name="taiKhoan"
					control={control}
					rules={{
						required: {
							value: true,
							message: "Tài khoản không được để trống",
						},
					}}
					render={({ field, fieldState: { error } }) => (
						<Form.Item
							validateStatus={error ? "error" : ""}
							help={error?.message}
						>
							<Input
								style={{ border: "1px solid #fa5252" }}
								placeholder="Tài khoản"
								type="text"
								{...field}
							/>
						</Form.Item>
					)}
				/>

				<Controller
					name="matKhau"
					control={control}
					rules={{
						required: {
							value: true,
							message: "Mật khẩu không được để trống",
						},
					}}
					render={({ field, fieldState: { error } }) => (
						<Form.Item
							validateStatus={error ? "error" : ""}
							help={error?.message}
						>
							<Input.Password
								style={{ border: "1px solid #fa5252" }}
								placeholder="Mật khẩu"
								type="password"
								{...field}
							/>
						</Form.Item>
					)}
				/>

				<Form.Item>
					<Button
						type="submit"
						disabled={isLoading}
						loading={isLoading}
						fullWidth
						sx={(theme) => ({
							transition: "all 0.5s ease",
							backgroundColor: "#fa5252",
							"&:hover": {
								backgroundColor: "#dc3545",
							},
						})}
					>
						Đăng Nhập
					</Button>
				</Form.Item>
				<hr style={{ border: "0.5px solid #fa5252" }} />
				<Form.Item>
					<NavLink style={{ color: "#fa5252" }} to="/register">
						Bạn chưa có tài khoản? Đăng kí
					</NavLink>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
