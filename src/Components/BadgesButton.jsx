import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function BadgesButton({ onClick }) {
  return (
    <Button variant="primary"  onClick={onClick}>
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default BadgesButton;