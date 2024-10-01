import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCart({show, onModalToggle}) {
  return (
    <>
      <Button variant="primary" onClick={onModalToggle} style = {{width:"50%"}}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={onModalToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onModalToggle}>
            Close
          </Button>
          <Button variant="primary" onClick={onModalToggle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCart;