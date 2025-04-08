import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import GamesService from "../Services/GamesService";
import GameCard from "../Components/GameCard";

const GamesPage = () => {
    const [games, setGames] = useState([]);

    const fetchGames = async () => {
        try {
            const response = await GamesService.getAllGames();
            setGames(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Une erreur est survenue lors de la récupération des parties");
        }
    }

    useEffect(() => {
        fetchGames();
    }, []);


    return <Container className="d-flex flex-column justify-content-center align-items-center">
        <h1>Games Page</h1>
        <div className="d-flex justify-content-end col-12">
            <Button variant="primary" onClick={() => { console.log("create Game");}} className="col-2">Créer une partie</Button>
        </div>
        <h2>Parties</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            {games.map((game) =>{
                return <GameCard key={game.id_game} game={game} />;
            } )}
        </div>
    </Container>;
}
 
export default GamesPage;