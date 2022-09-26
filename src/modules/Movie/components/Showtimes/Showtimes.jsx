import React from "react";
import { Col, Collapse, Row, Tabs } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Container } from "@mantine/core";
import useRequest from "hooks/useRequest";
import cinemaAPI from "apis/cinemaAPI";
import "./showtimes.scss";
const Showtimes = ({ movieId }) => {
	const navigate = useNavigate();
	const {
		data: theaterInfos,
		isLoading,
		error,
	} = useRequest(() => cinemaAPI.getMovieScheduleDetails(movieId));
	console.log("theaterInfos", theaterInfos);
	const onChange = (key) => {
		console.log(key);
	};
	const goToTicketRoom = (ticketId) => {
		navigate(`/ticket/${ticketId}`);
	};
	const { Panel } = Collapse;
	return (
		<div id="Showtimes" className="showtimes">
			<Tabs
				className="showtimes-desktop"
				defaultActiveKey="1"
				tabPosition="left"
			>
				{theaterInfos?.heThongRapChieu.map((cinemaSystem) => {
					return (
						<Tabs.TabPane
							className="cinema-scroll"
							key={cinemaSystem.maHeThongRap}
							tab={
								<div className="showtimes-cinema">
									<div className="showtimes-logo">
										<img
											width={50}
											height={50}
											src={cinemaSystem.logo}
											alt={cinemaSystem.maHeThongRap}
										/>
									</div>
								</div>
							}
						>
							<div className="showtimes-scroll">
								{cinemaSystem.cumRapChieu?.map((cinemaComplex) => {
									return (
										<div
											key={cinemaComplex.maCumRap}
											className="showtimes-complex"
										>
											<h1 className="showtimes-name">
												{cinemaComplex.tenCumRap}
											</h1>
											<div className="showtimes-date">
												{cinemaComplex.lichChieuPhim?.map((dateTime) => {
													return (
														<button
															key={dateTime.maLichChieu}
															onClick={() =>
																goToTicketRoom(dateTime.maLichChieu)
															}
														>
															{moment(dateTime.ngayChieuGioChieu).format(
																"L - hh:mm A"
															)}
														</button>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</Tabs.TabPane>
					);
				})}
			</Tabs>

			<Collapse className="showtimes-mobile" onChange={onChange}>
				{theaterInfos?.heThongRapChieu.map((cinemaSystem, index) => {
					return (
						<Panel
							key={index + 1}
							header={
								<div className="showtimes-cinema-mobile">
									<div className="showtimes-logo-mobile">
										<img
											width={50}
											height={50}
											src={cinemaSystem.logo}
											alt={cinemaSystem.maHeThongRap}
										/>
									</div>
									<div className="showtimes-name-cinema-mobile">
										<p>{cinemaSystem.tenHeThongRap}</p>
									</div>
								</div>
							}
						>
							<div className="showtimes-scroll-mobile">
								{cinemaSystem.cumRapChieu?.map((cinemaComplex) => {
									return (
										<div
											key={cinemaComplex.maCumRap}
											className="showtimes-complex-mobile"
										>
											<h1 className="showtimes-name-mobile">
												{cinemaComplex.tenCumRap}
											</h1>
											<div className="showtimes-date-mobile">
												{cinemaComplex.lichChieuPhim?.map((dateTime) => {
													return (
														<button
															key={dateTime.maLichChieu}
															onClick={() =>
																goToTicketRoom(dateTime.maLichChieu)
															}
														>
															{moment(dateTime.ngayChieuGioChieu).format(
																"L - hh:mm A"
															)}
														</button>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</Panel>
					);
				})}
			</Collapse>
		</div>
	);
};

export default Showtimes;
