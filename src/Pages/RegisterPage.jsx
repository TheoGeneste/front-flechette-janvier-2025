import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import AuthService from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        pseudo: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if (user.password !== user.confirmPassword) {
                toast.error("Le mot de passe n'as pas été confirmé")
                return;
            }
            const response = await AuthService.register(user);
            console.log(response);
            toast.success("Inscription réussie")
            navigate("/login")
        }catch (error) {
            toast.error("Une erreur est survenue")
            console.log(error);
        }
    }

    return <Container className="d-flex justify-content-center align-items-center vh-100">
        <Form className="w-50" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Lastname..." name="lastname" value={user.lastname} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrenoms">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Firstname..." name="firstname" value={user.firstname} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPseudo">
                <Form.Label>Pseudo</Form.Label>
                <Form.Control type="text" placeholder="Pseudo..." name="pseudo" value={user.pseudo} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email..." name="email" value={user.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  name="password" value={user.password} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmer Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
            </Form.Group>
           
            <Button variant="primary" type="submit" className="col-12">
                Submit
            </Button>
        </Form>
    </Container>;
}

export default RegisterPage;