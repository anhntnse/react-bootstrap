import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Menu({img}) {
  return (
    <Card >
      <Card.Img variant="top" src={img} style={{height: '100%'}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Menu;