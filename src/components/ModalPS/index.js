import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Modal, Col, Row } from 'react-bootstrap';
import api from '~/services/api';

import { SellerText, TextInfo, TextNormal, Button, EmailBox } from './styles';

export default function ModalContact({
  sell,
  purchaseCode,
  visible,
  closeModal,
  person,
}) {
  const [message, setMessage] = useState('');
  const [text, setText] = useState('Enviar mensagem');

  const sendMessagetoSeller = async () => {
    try {
      if (message.length < 20) {
        toast.error(
          'Precisamos de uma mensagem maior para envia-la ao vendedor.'
        );
      } else {
        setText('Enviando mensagem...');

        await api.post('sendingEmailSeller', {
          name: person.name,
          email: person.email,
          purchaseCode,
          message,
        });

        setText('Mensagem enviada');

        setTimeout(() => {
          closeModal();
        }, 1500);
      }
    } catch (e) {
      setText('Falha ao enviar');
    }
  };

  const sendMessagetoBuyer = async () => {
    try {
      if (message.length < 20) {
        toast.error(
          'Mensagem curta',
          'Precisamos de uma mensagem maior para envia-la ao comprador.'
        );
      } else {
        setText('Enviando mensagem...');

        await api.post('sendingEmailBuyer', {
          name: person.name,
          email: person.email,
          purchaseCode,
          message,
        });

        setText('Mensagem enviada');

        setTimeout(() => {
          closeModal();
        }, 1500);
      }
    } catch (e) {
      setText('Falha ao enviar');
    }
  };

  const ButtonPress = () => {
    if (text === 'Enviar mensagem') {
      return sell ? sendMessagetoSeller() : sendMessagetoBuyer();
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
          <Button onClick={ButtonPress}>Enviar email</Button>
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
  purchaseCode: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

ModalContact.defaultProps = {
  sell: false,
};
