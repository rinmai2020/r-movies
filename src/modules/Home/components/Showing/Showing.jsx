import { useNavigate } from "react-router-dom";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { BsPlayCircle } from "react-icons/bs";
import { Button, Grid, Container, Modal, Pagination } from "@mantine/core";
import { useState } from "react";
import "./showing.scss";
const MovieShotimes = () => {
  const [opened, setOpened] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data: movies } = useRequest(() => movieAPI.getMoviePages({ page }), {
    deps: [page],
  });
  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  const handleChange = (page) => {
    setPage(page);
  };
  return (
    <Container mt={30} id="showing" size="lg">
      <Grid gutter={24} mb={20}>
        {movies?.items.map((movie) => {
          return (
            <Grid.Col key={movie.maPhim} xs={6} sm={4} md={3} lg={3}>
              <div className="box">
                <div onClick={() => setOpened(true)} className="box-img">
                  <img src={movie.hinhAnh} alt="" />
                  <BsPlayCircle className="play" />
                </div>
                <div className="info">
                  <div className="content">
                    <h3>
                      {movie.tenPhim.length > 18
                        ? movie.tenPhim.substring(0, 18) + "..."
                        : movie.tenPhim}
                    </h3>
                    <p className="pInfo">
                      {movie.moTa.length > 25
                        ? movie.moTa.substring(0, 25) + "..."
                        : movie.moTa}
                    </p>
                  </div>
                  <Button
                    className="btnPrice"
                    color="red"
                    fullWidth
                    onClick={() => goToMovie(movie.maPhim)}
                  >
                    Mua Vé
                  </Button>
                </div>
                <Modal
                  size="xl"
                  opened={opened}
                  onClose={() => setOpened(false)}
                >
                  <iframe
                    width="100%"
                    height={500}
                    src={movie.trailer}
                    title={movie.tenPhim}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Modal>
              </div>
            </Grid.Col>
          );
        })}
      </Grid>
      <Pagination
        noWrap="true"
        mb={30}
        onChange={handleChange}
        total={movies?.totalPages - 1}
        radius="sm"
        spacing="sm"
        position="center"
        color="red"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            margin: "30 10px",
            noWrap: "false",
          },
        })}
      />
    </Container>
  );
};

export default MovieShotimes;
