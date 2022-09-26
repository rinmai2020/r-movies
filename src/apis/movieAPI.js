import axiosClient from "./axiosClient";

const movieAPI = {
	getBanners: () => {
		return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
	},
	getMoviePages: ({ page }) => {
		return axiosClient.get("QuanLyPhim/LayDanhSachPhimPhanTrang", {
			params: {
				maNhom: "GP03",
				soTrang: page,
				soPhanTuTrenTrang: 8,
			},
		});
	},
	getMovies: (search) => {
		if (search !== "") {
			return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
				params: {
					maNhom: "GP03",
					tenPhim: search,
				},
			});
		}
		return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
			params: {
				maNhom: "GP03",
			},
		});
	},

	getMovieDetails: (movieId) => {
		return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
			params: {
				maPhim: movieId,
			},
		});
	},

	addMovie: (movie) => {
		const formData = new FormData();
		for (let key in movie) {
			formData.append(key, movie[key]);
		}
		formData.append("maNhom", "GP03");

		return axiosClient.post("QuanLyPhim/ThemPhimUploadHinh", formData);
	},

	deleteMovie: (movieId) => {
		return axiosClient.delete("QuanLyPhim/XoaPhim", {
			params: {
				maPhim: movieId,
			},
		});
	},

	updateMovie: (movie) => {
		const formData = new FormData();
		for (let key in movie) {
			formData.append(key, movie[key]);
		}
		formData.append("maNhom", "GP03");
		return axiosClient.post("QuanLyPhim/CapNhatPhimUpload", formData);
	},
};

export default movieAPI;
