import { Col, Row } from "antd";
import React from "react";
import {
	AiFillAndroid,
	AiFillApple,
	AiOutlineFacebook,
	AiOutlineGooglePlus,
	AiOutlineInstagram,
	AiOutlineYoutube,
} from "react-icons/ai";
import footer from "./footer.module.scss";

const Footer = () => {
	return (
		<div id="footer" className={footer.footer}>
			<div className={footer.details}>
				<div className={footer.appItem}>
					<h1>SOCIAL</h1>
					<div className={footer.hotline}>
						<div>
							<a href="#" className={footer.app}>
								<AiOutlineFacebook />
							</a>
						</div>
						<div>
							<a href="#" className={footer.app}>
								<AiOutlineInstagram />
							</a>
						</div>
						<div>
							<a href="#" className={footer.app}>
								<AiOutlineYoutube />
							</a>
						</div>
						<div>
							<a href="#" className={footer.app}>
								<AiOutlineGooglePlus />
							</a>
						</div>
					</div>
				</div>

				<div className={footer.faqItem}>
					<h1>LIÊN HỆ</h1>
					<a href="#">FAQ</a>
					<a href="#">Brand Guidelines</a>
					<a href="#">Thỏa thuận sử dụng</a>
					<a href="#">Chính sách bảo mật</a>
				</div>

				<div className={footer.cinemaItem}>
					<h1>ĐỐI TÁC</h1>
					<div className={footer.cinemaList}>
						<div className={footer.image}>
							<a href="#" className={footer.theater}>
								<img
									src="https://static-s.aa-cdn.net/img/gp/20600005285939/9N7f8PWb1zlDqOR4mepkNFkRt5SlrjFoLsg5jYtVhvq9LeQneLKyHg9eEx4BSgyl7F4=w300?v=1"
									alt="cgv"
								/>
							</a>
						</div>
						<div className={footer.image}>
							<a href="#" className={footer.theater}>
								<img
									src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/9b/e6/c5/9be6c53e-eb2f-f3e9-ff01-445036af8ca9/source/256x256bb.jpg"
									alt="bhd"
								/>
							</a>
						</div>
						<div className={footer.image}>
							<a href="#" className={footer.theater}>
								<img
									src="https://cdn.mywork.com.vn/company-logo-medium/102018/3N1jjAtQffNCDZxYTeTx54khfndItCJiIBaDTvEL.w-200.h-200.fit-crop.jpeg"
									alt="glx"
								/>
							</a>
						</div>
						<div className={footer.image}>
							<a href="#" className={footer.theater}>
								<img
									src="https://printgo.vn/uploads/file-logo/1/512x512.6ceefc7f866a88b5ebb6c32591020e26.ai.1.png"
									alt="cns"
								/>
							</a>
						</div>
						<div className={footer.image}>
							<a href="#" className={footer.theater}>
								<img
									src="https://cdn.mywork.com.vn/company-logo-medium/042019/e6e940613a8915e90449d625a72f4ecb.png"
									alt="lotte"
								/>
							</a>
						</div>
					</div>
				</div>

				<div className={footer.mobileItem}>
					<h1>MOBILE APP</h1>
					<div gutter={10} className={footer.mobileApp}>
						<div>
							<a href="#" className={footer.store}>
								<AiFillApple />
							</a>
						</div>
						<div>
							<a href="#" className={footer.store}>
								<AiFillAndroid />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
