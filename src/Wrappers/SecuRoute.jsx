import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import LoginPage from "../Pages/LoginPage";

const SecuRoute = (props) => {
    const {isLoggedIn} = useContext(AuthContext);

    return isLoggedIn ? props.children : <LoginPage />;
}
 
export default SecuRoute;