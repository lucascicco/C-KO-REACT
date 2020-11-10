import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Col, Row } from 'react-bootstrap';

import { TextInfo, TextNormal, Button, EmailBox } from './styles';

export default function ModalContact({
  sell,
  visible,
  closeModal,
  person,
  text,
  sendFunction,
}) {
  const [message, setMessage] = useState('');

  const ButtonPress = () => {
    if (text === 'Enviar mensagem') {
      return sendFunction(message);
    }

    return null;
  };

  const definition = sell ? 'vendedor' : 'comprador';

  return (
    <>
      <Modal show={visible} onHide={closeModal} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-secondary">
            {`Dados do ${definition}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mt-3 mb-3">
            <Col md={12}>
              <EmailBox
                placeholder={`Mande um email para o ${definition}`}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                maxLength={350}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={6}>
              <TextInfo>Nome</TextInfo>
              <TextNormal>{person.name}</TextNormal>
            </Col>
            <Col xs={6} md={6}>
              <TextInfo>Telefone</TextInfo>
              <TextNormal>{person.cellphone}</TextNormal>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <TextInfo>Email</TextInfo>
              <TextNormal>{person.email}</TextNormal>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ButtonPress}>{text}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ModalContact.propTypes = {
  sell: PropTypes.bool,
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cellphone: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,

  sendFunction: PropTypes.func.isRequired,
};

ModalContact.defaultProps = {
  sell: false,
};
