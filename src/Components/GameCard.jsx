import { Button, Card } from "react-bootstrap";

const GameCard = ({ game }) => {
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{game.players == null ? "Aucun Joueur": game.players}</Card.Title>
                <Card.Text>
                    status : {game.status} <br />
                    Mode : {game.label} <br />

                </Card.Text>
                <Button variant="primary">Voir la partie</Button>
            </Card.Body>
        </Card>
    </>;
}

export default GameCard;