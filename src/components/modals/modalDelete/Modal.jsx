import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function MyVerticallyCenteredModalDelete(props) {

  var positinTextModal = { textAlign: 'center' }

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Atenção
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <div style={positinTextModal}>
        <p>Deseja excluir registro?</p>
        </div>
        <div className="d-grid gap-2">
      <Button variant="danger" size="md" type="submit">
        Excluir
      </Button>
      </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

