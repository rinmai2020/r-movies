import axiosClient from "./axiosClient";

const cinemaAPI = {
	getMovieSchedule: () => {
		return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
			params: {
				maNhom: "GP03",
			},
		});
	},

	getMovieScheduleDetails: (movieId) => {
		return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
			params: {
				MaPhim: movieId,
			},
		});
	},

	getCinemaSystem: () => {
		return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
	},

	getCinemaTheater: (theaterName) => {
		return axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
			params: {
				maHeThongRap: theaterName,
			},
		});
	},
};

export default cinemaAPI;
