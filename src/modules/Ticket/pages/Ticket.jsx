import { Col, Row } from "antd";
import ticketAPI from "apis/ticketAPI";
import useRequest from "hooks/useRequest";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TitleFunction } from "utils/TitleFunction";
import BookSeats from "../components/BookSeats";
import BookTickets from "../components/BookTickets";

import "./ticket.scss";

const Ticket = () => {
	const [checkList, setCheckList] = useState([]);

	const handleChecked = (seat) => {
		const index = checkList.findIndex((seatList) => {
			return seatList.maGhe === seat.maGhe;
		});

		let newList = [...checkList];
		if (index !== -1) {
			newList = newList.filter((item) => {
				return item.maGhe !== seat.maGhe;
			});
		} else {
			newList.push(seat);
		}

		setCheckList(newList);
	};

	const { ticketId } = useParams();

	const {
		data: tickets,
		isLoading,
		error,
	} = useRequest(() => ticketAPI.getTicketDetails(ticketId));

	TitleFunction("Ticket");

	return (
		<div style={{ margin: "64px 0 0" }} className="ticket">
			<div className="ticket-main">
				<div className="ticket-seat-list">
					<BookSeats
						tickets={tickets}
						checkList={checkList}
						handleChecked={handleChecked}
					/>
				</div>

				<div className="ticket-booking">
					<BookTickets
						ticketId={ticketId}
						tickets={tickets}
						checkList={checkList}
					/>
				</div>
			</div>
		</div>
	);
};

export default Ticket;
