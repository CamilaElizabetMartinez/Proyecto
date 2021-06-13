import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./card.css"


export default function Cards() {
    return (
        <CardGroup>
            <Col xl="4" xs="12">
                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Button href="#">Vér perfil</Button>
                </Card>
            </Col>
            <Col xl="4" xs="12">
                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Button href="#">Vér perfil</Button>
                </Card>
            </Col>
            <Col xl="4" xs="12">
                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Button href="#">Vér perfil</Button>
                </Card>
            </Col>
        </CardGroup>
    );
};