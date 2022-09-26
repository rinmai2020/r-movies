import React, { Fragment } from "react";
import cn from "classnames";

import "./bookSeats.scss";

const BookSeats = ({ tickets, checkList, handleChecked }) => {
	return (
		<div className="booking">
			<div className="booking-light"></div>

			<div className="booking-seats">
				<div className="booking-list">
					{tickets?.danhSachGhe.map((seat, index) => {
						const isChecked =
							checkList.findIndex((item) => item.maGhe === seat.maGhe) !== -1;
						return (
							<Fragment key={index}>
								{!seat.daDat ? (
									<button
										onClick={() => handleChecked(seat)}
										className={cn(
											"booking-seat",
											{
												"booking-vip": seat.loaiGhe === "Vip",
											},
											{
												"booking-checked": isChecked,
											}
										)}
									>
										{Number(seat.tenGhe).toLocaleString()}
									</button>
								) : (
									<button className="booking-booked" disabled={seat.daDat}>
										X
									</button>
								)}
								{(index + 1) % 16 === 0 ? <br /> : ""}
							</Fragment>
						);
					})}
				</div>
			</div>

			<div className="booking-sub">
				<div>
					<span className="checked"></span>
					<span className="title">Đang Chọn</span>
				</div>

				<div>
					<span className="vip"></span>
					<span className="title">Vip</span>
				</div>

				<div>
					<span className="regular"></span>
					<span className="title">Thường</span>
				</div>

				<div>
					<span className="booked">X</span>
					<span className="title">Đã đặt</span>
				</div>
			</div>
		</div>
	);
};

export default BookSeats;
