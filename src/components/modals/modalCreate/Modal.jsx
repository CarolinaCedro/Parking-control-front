import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastrar Morador
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nome Proprietario</Form.Label>
        <Form.Control type="text" placeholder="Entre com nome" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Placa Carro</Form.Label>
        <Form.Control type="text" placeholder="Entre com nome" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Modelo Carro</Form.Label>
        <Form.Control type="text" placeholder="Entre com nome" />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Cor Carro</Form.Label>
        <Form.Control type="text" placeholder="Entre com nome" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apartamento</Form.Label>
        <Form.Control type="text" placeholder="Entre com nome" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Bloco</Form.Label>
        <Form.Control type="text" placeholder="Entre com nome" />
        
      </Form.Group> 
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
      </Modal.Body>
    </Modal>
  );
}

