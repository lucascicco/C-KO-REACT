import React from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { TextNormal } from './styles';

export default function ModalPrompt({ visible, onCancel, onConfirm }) {
  return (
    <Modal show={visible} backdrop="static" keyboard={false}>
      <Modal.Body>
        <Row>
          <Col lg="12">
            <TextNormal>
              Você está quase lá, vamos lá. Você tem certeza? Os dados
              preenchidos podem ser perdidos.
            </TextNormal>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Continuar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ModalPrompt.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
