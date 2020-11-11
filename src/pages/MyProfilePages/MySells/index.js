import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { isSameDay } from 'date-fns';
import api from '~/services/api';
import SellsList from '~/components/MySells';
import { Title, DivFilter, RemoveText } from './styles';
import ModalPS from '~/components/ModalPS';
import ReactDatePicker from '~/components/DataFilter';

export default function MySells() {
  const [mySells, SetMySells] = useState([]);
  const [visibleSells, setVisibleSells] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState('');
  const [text, setText] = useState('Enviar mensagem');
  const [filterDate, setFilterDate] = useState('');

  const loadMySells = async () => {
    const response = await api.get('mySells');

    const organizedData = response.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    SetMySells(organizedData);
    setVisibleSells(organizedData);
  };

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

  const onFilterChange = (data) => {
    setFilterDate(data);

    if (data === null) {
      return setVisibleSells(mySells);
    }

    const FilterByDate = mySells.filter((e) => {
      return isSameDay(new Date(e.createdAt), data);
    });

    return setVisibleSells(FilterByDate);
  };

  const RemoveFilter = () => {
    setFilterDate('');
    setVisibleSells(mySells);
  };

  useEffect(() => {
    loadMySells();
  }, []);

  return (
    <Container>
      <Title>Minhas vendas</Title>

      <DivFilter>
        <ReactDatePicker
          name="date"
          placeholderText="Filtrar por data"
          onChange={(e) => onFilterChange(e)}
          value={filterDate}
        />
        {filterDate && (
          <RemoveText onClick={RemoveFilter}>Remover filtro</RemoveText>
        )}
      </DivFilter>

      <SellsList data={visibleSells} openModal={OpenModal} />
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
