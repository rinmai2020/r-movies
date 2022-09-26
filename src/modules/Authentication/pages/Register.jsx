import authAPI from "apis/authAPI";
import useRequest from "hooks/useRequest";
import { Form, Input } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { useForm, Controller } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Text } from "@mantine/core";
import Swal from "sweetalert2";
const Register = () => {
	const navigate = useNavigate();
	const { data: handleRegister, isLoading } = useRequest(
		(values) => authAPI.register(values),
		{ isManual: true }
	);
	const { control, handleSubmit } = useForm({
		defaultValues: {
			taiKhoan: "",
			matKhau: "",
			email: "",
			hoTen: "",
			soDt: "",
		},
		mode: "onTouched",
	});

	const onSubmit = async (values) => {
		try {
			await handleRegister(values).unwrap();
			if (values.taiKhoan) {
				Swal.fire({
					icon: "success",
					title: "Đăng ký thành công",
				});
				navigate("/login");
			}
		} catch (error) {
			Swal.fire({
				icon: "warning",
				title: ` Email đã tồn tại`,
			});
			// notification.error({
			//   message: "Đăng ký thất bại",
			//   description: error,
			// });
		}
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
				Register
			</Text>
			<Form
				style={{ width: 320 }}
				onFinish={handleSubmit(onSubmit)}
				labelCol={{ span: 0 }}
				wrapperCol={{ span: 24 }}
			>
				<Controller
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
				{/* password  */}
				<Controller
					name="matKhau"
					control={control}
					rules={{
						required: {
							value: true,
							message: "Mật khẩu không được để trống",
						},
						minLength: {
							value: 5,
							message: "Mật khẩu phải từ 5 đến 20 ký tự",
						},
						maxLength: {
							value: 20,
							message: "Mật khẩu phải từ 5 đến 20 ký tự",
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
				{/* Email  */}
				<Controller
					name="email"
					control={control}
					rules={{
						required: {
							value: true,
							message: "Email không được để trống",
						},
						pattern: {
							value:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: "Email không đúng định dạng",
						},
					}}
					render={({ field, fieldState: { error } }) => (
						<Form.Item
							validateStatus={error ? "error" : ""}
							help={error?.message}
						>
							<Input
								style={{ border: "1px solid #fa5252" }}
								placeholder="Email"
								type="text"
								{...field}
							/>
						</Form.Item>
					)}
				/>
				{/* fullName  */}
				<Controller
					name="hoTen"
					control={control}
					rules={{
						required: {
							value: true,
							message: "Họ tên không được để trống",
						},
					}}
					render={({ field, fieldState: { error } }) => (
						<Form.Item
							validateStatus={error ? "error" : ""}
							help={error?.message}
						>
							<Input
								style={{ border: "1px solid #fa5252" }}
								placeholder="Họ và tên"
								type="text"
								{...field}
							/>
						</Form.Item>
					)}
				/>
				<Controller
					name="soDt"
					control={control}
					rules={{
						required: {
							value: true,
							message: "Số điện thoại không được để trống",
						},
					}}
					render={({ field, fieldState: { error } }) => (
						<Form.Item
							validateStatus={error ? "error" : ""}
							help={error?.message}
						>
							<Input
								style={{ border: "1px solid #fa5252" }}
								placeholder="Số điện thoại"
								type="text"
								{...field}
							/>
						</Form.Item>
					)}
				/>
				<Form.Item>
					<Button
						fullWidth
						sx={(theme) => ({
							backgroundColor: "#fa5252",
							transition: "all 0.5s ease",
							"&:hover": {
								backgroundColor: "#dc3545",
							},
						})}
						type="submit"
						disabled={isLoading}
						loading={isLoading}
						block
					>
						Đăng Ký
					</Button>
				</Form.Item>
				<hr style={{ border: "0.25px solid #fa5252" }} />
				<Form.Item>
					<NavLink style={{ color: "#fa5252" }} to="/login">
						Bạn đã có tài khoản? Đăng nhập
					</NavLink>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Register;
