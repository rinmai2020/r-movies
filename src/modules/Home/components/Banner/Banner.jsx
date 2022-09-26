import movieAPI from "apis/movieAPI";
import useRequest from "hooks/useRequest";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.scss";
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
	const { data: banners } = useRequest(() => movieAPI.getBanners());
	return (
		<>
			<Swiper
				loop={true}
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{banners?.map((banner) => {
					return (
						<SwiperSlide key={banner.maBanner}>
							<img
								key={banner.maBanner}
								src={banner.hinhAnh}
								alt={`banner-${banner.maBanner}`}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Banner;
