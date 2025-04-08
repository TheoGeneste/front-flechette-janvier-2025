import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService from "../Services/AuthService";
import { Button, Container, Form } from "react-bootstrap";
import AuthContext from "../Context/AuthContext";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
    const [currentUser, setCurrentUser] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const {setIsLoggedIn, setUser} = useContext(AuthContext);

    const handleChange = (e) => {
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.login(currentUser);
            localStorage.setItem("token", response.data.token);
            const decodedToken = jwtDecode(response.data.token);
            setUser(decodedToken.user);
            setIsLoggedIn(true);
            toast.success("Connexion réussie")
            navigate("/")
        } catch (error) {
            toast.error("Une erreur est survenue")
            console.log(error);
        }
    }

    return <Container className="d-flex justify-content-center align-items-center vh-100">
        <Form className="w-50" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email..." name="email" value={currentUser.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={currentUser.password} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className="col-12">
                Submit
            </Button>
        </Form>
    </Container>;
}

export default LoginPage