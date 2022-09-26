import axiosClient from "./axiosClient";

const ticketAPI = {
	getTicketDetails: (ticketId) => {
		return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
			params: {
				MaLichChieu: ticketId,
			},
		});
	},

	addTheater: (showtimes) => {
		return axiosClient.post("QuanLyDatVe/TaoLichChieu", showtimes);
	},

	bookingTicket: (infoBooking) => {
		return axiosClient.post("QuanLyDatVe/DatVe", infoBooking);
	},
};

export default ticketAPI;
