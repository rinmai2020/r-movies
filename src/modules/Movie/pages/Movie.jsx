import { Container } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import { TitleFunction } from "utils/TitleFunction";

import Overview from "../components/Overview";
import Showtimes from "../components/Showtimes";

const Movie = () => {
	const { movieId } = useParams();

	return (
		<Container size="xl">
			<Overview movieId={movieId} />
			<Showtimes movieId={movieId} />
		</Container>
	);
};

export default Movie;
