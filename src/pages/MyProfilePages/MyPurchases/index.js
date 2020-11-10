import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import api from '~/services/api';
import PurchaseList from '~/components/MyPurchases';
import history from '~/services/history';
import { Title } from './styles';
import ModalPS from '~/components/ModalPS';

export default function MyPurchases() {
  const [myPurchases, setMyPurchases] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState('');
  const [text, setText] = useState('Enviar mensagem');

  const loadMySells = async () => {
    const response = await api.get('myPurchases');

    const organizedData = response.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setMyPurchases(organizedData);
  };

  const navigate = (id) => {
    history.push(`/product/${id}`);
    history.go();
  };

  const OpenModal = (obj) => {
    setModalData(obj);
    setVisible(true);
  };

  const sendMessagetoSeller = async (message) => {
    try {
      if (message.length < 20) {
        toast.error(
          'Precisamos de uma mensagem maior para envia-la ao vendedor.'
        );
      } else {
        setText('Enviando mensagem...');

        await api.post('sendingEmailSeller', {
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

  useEffect(() => {
    loadMySells();
  }, []);

  return (
    <Container>
      <Title>Minhas compras</Title>

      <PurchaseList
        data={myPurchases}
        navigate={navigate}
        openModal={OpenModal}
      />

      {visible && (
        <ModalPS
          person={modalData.person}
          visible={visible}
          purchaseCode={modalData.code}
          closeModal={() => {
            setVisible(false);
          }}
          text={text}
          setText={(e) => {
            setText(e);
          }}
          sendFunction={sendMessagetoSeller}
          sell
        />
      )}
    </Container>
  );
}
