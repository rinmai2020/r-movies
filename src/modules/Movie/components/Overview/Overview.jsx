import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { BsPlayCircle } from "react-icons/bs";
import { Rate } from "antd";
import { Button, Grid, Modal, Title } from "@mantine/core";
import moment from "moment";
import { useState } from "react";
import "./overview.scss";
const Overview = ({ movieId }) => {
  const [movie, setMovie] = useState(true);
  const [opened, setOpened] = useState(false);
  const { data: movies } = useRequest(() => movieAPI.getMovieDetails(movieId));
  if (!movies) {
    return null;
  }
  return (
    <div id="MovieShowing">
      <Grid gutter={24} mt={100} mb={20}>
        <Grid.Col key={movies.maPhim} sm={4} lg={4}>
          <div className="overview">
            <div onClick={() => setOpened(true)} className="box-img">
              <img src={movies.hinhAnh} alt="" />
              <BsPlayCircle className="play" />
            </div>
            <Modal size="xl" opened={opened} onClose={() => setOpened(false)}>
              <iframe
                width="100%"
                height={500}
                src={movies.trailer}
                title={movies.tenPhim}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Modal>
          </div>
        </Grid.Col>
        <Grid.Col sm={8} lg={8}>
          <div>
            <div className="content">
              <Title
                mb={20}
                style={{ color: "red", fontSize: "40px", height: "100%" }}
              >
                {movies.tenPhim}
              </Title>
              <>
                {movie === movies.sapChieu ? (
                  <Button mb={20} mr={20} variant="outline" color="red">
                    Sắp chiếu
                  </Button>
                ) : (
                  ""
                )}
                {movie === movies.dangChieu ? (
                  <Button mb={10} color="green">
                    Đang chiếu
                  </Button>
                ) : (
                  ""
                )}
              </>
              <p>
                <Rate
                  allowHalf
                  count={5}
                  disabled
                  defaultValue={movies.danhGia / 2}
                />
              </p>
              <p tyle={{ color: "red", fontSize: "18px" }}>
                {moment(movies.ngayKhoiChieu).format(` DD-MM-YYYY ~ hh:mm A `)}
              </p>
              <div
                style={{
                  overflowY: "scroll",
                  height: 195,
                  scrollBehavior: "smooth",
                }}
              >
                <p style={{ height: "100%" }}>{movies.moTa}</p>
              </div>
            </div>
            <a style={{ textDecoration: "none" }} href="#Showtimes">
              <Button
                my={10}
                style={{ fontSize: "20px" }}
                color="red"
                href="#Showtimes"
              >
                Mua Vé
              </Button>
            </a>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Overview;
