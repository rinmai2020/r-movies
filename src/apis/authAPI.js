import axiosClient from "./axiosClient";

const authAPI = {
	login: (values) => {
		return axiosClient.post("QuanLyNguoiDung/DangNhap", values);
	},

	register: (values) => {
		return axiosClient.post("QuanLyNguoiDung/DangKy", {
			...values,
			maNhom: "GP03",
		});
	},

	getUsers: () => {
		return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung", {
			params: {
				maNhom: "GP00",
			},
		});
	},

	getUserType: () => {
		return axiosClient.get("QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
	},

	addUser: (values) => {
		return axiosClient.post("QuanLyNguoiDung/ThemNguoiDung", {
			...values,
			maNhom: "GP00",
		});
	},

	deleteUser: (account) => {
		return axiosClient.delete("QuanLyNguoiDung/XoaNguoiDung", {
			params: {
				taiKhoan: account,
			},
		});
	},

	getUserDetails: (account) => {
		return axiosClient.post(
			// `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${account}`
			"/QuanLyNguoiDung/LayThongTinNguoiDung",
			{},
			{
				params: {
					taiKhoan: account,
				},
			}
		);
	},

	updateUser: (values) => {
		console.log(values);
		return axiosClient.post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
			...values,
			maNhom: "GP03",
		});
	},

	updateUserClient: (values) => {
		console.log(values);
		return axiosClient.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
			...values,
			maNhom: "GP03",
		});
	},

	searchUser: (value) => {
		return axiosClient.get("QuanLyNguoiDung/TimKiemNguoiDung", {
			params: {
				maNhom: "GP00",
				tuKhoa: value,
			},
		});
	},

	getUserInfo: () => {
		return axiosClient.post("QuanLyNguoiDung/ThongTinTaiKhoan");
	},
};

export default authAPI;
