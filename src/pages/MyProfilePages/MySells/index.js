import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import api from '~/services/api';
import SellsList from '~/components/MySells';
import { Title } from './styles';
import ModalPS from '~/components/ModalPS';

export default function MySells() {
  const [mySells, SetMySells] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState('');
  const [text, setText] = useState('Enviar mensagem');

  const loadMySells = async () => {
    const response = await api.get('mySells');

    const organizedData = response.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    SetMySells(organizedData);
  };

  useEffect(() => {
    loadMySells();
  }, []);

  const OpenModal = (obj) => {
    setModalData(obj);
    setVisible(true);
  };

  const sendMessagetoBuyer = async (message) => {
    try {
      if (message.length < 20) {
        toast.error(
          'Precisamos de uma mensagem maior para envia-la ao comprador.'
        );
      } else {
        setText('Enviando mensagem...');

        await api.post('sendingEmailBuyer', {
          name: modalData.person.name,
          email: modalData.person.email,
          purchaseCode: modalData.code,
          message,
        });

        setText('Mensagem enviada');

        setTimeout(() => {
          setVisible(false);
        }, 1500);
      }
    } catch (e) {
      setText('Falha ao enviar');
    }
  };

  return (
    <Container>
      <Title>Minhas vendas</Title>
      <SellsList data={mySells} openModal={OpenModal} />
      {visible && (
        <ModalPS
          person={modalData.person}
          visible={visible}
          purchaseCode={modalData.code}
          closeModal={() => {
            setVisible(false);
          }}
          text={text}
          sendFunction={sendMessagetoBuyer}
        />
      )}
    </Container>
  );
}
