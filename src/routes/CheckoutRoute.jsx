import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const CheckoutRoute = ({ children }) => {
	const { user } = useSelector((state) => state.auth);

	if (!user) {
		swal("Vui lòng đăng nhập để đặt vé!", "You clicked the button!", "warning");
		return <Navigate to="/login" />;
	}

	return children;
};

export default CheckoutRoute;
