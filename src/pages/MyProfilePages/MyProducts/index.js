import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BiArrowBack } from 'react-icons/bi';
import { toast } from 'react-toastify';
import api from '~/services/api';
import MyProductList from '~/components/MyProducts';
import { Title, DisplayFlex, ButtonBack } from './styles';
import SellsMyItem from './SellsByProduct';
import ModalPS from '~/components/ModalPS';
import TitleChoice from '~/utils/TitleProduct';
import EditPage from './EditProduct';
import ModalPause from '~/components/ModalPause';

export default function MyProducts() {
  const [page, setPage] = useState('first');
  const [myProducts, SetMyProducts] = useState([]);
  const [dataSells, setDataSells] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState('');
  const [text, setText] = useState('Enviar mensagem');
  const [latestInfo, setLastest] = useState([]);
  const [visibleTwo, setVisibleTwo] = useState(false);

  const sortItems = (a, b) => {
    if (a.product.status_id > b.product.status_id) {
      return 1;
    }
    if (a.product.status_id < b.product.status_id) {
      return -1;
    }
    return 0;
  };

  const loadMyProducts = async () => {
    const response = await api.get('myProducts');

    const sortPerStatus = response.data.sort(sortItems);

    SetMyProducts(sortPerStatus);
  };

  const goNextClick = async (id) => {
    const response = await api.get('mySellsByProductId', {
      params: {
        id,
      },
    });

    const organizedData = response.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setDataSells(organizedData);
    setPage(organizedData.length > 0 ? 'second' : 'first');
  };

  const goBackButton = () => {
    setPage('first');
    setDataSells([]);
    setLastest([]);
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

  const OpenModal = (obj) => {
    setModalData(obj);
    setVisible(true);
  };

  const handleSubmit = async ({ id, quantity, description, price }) => {
    try {
      await api.put('product', {
        product_id: id,
        quantity,
        description,
        price,
      });

      toast.success('Atualizado com sucesso');

      setTimeout(() => {
        setPage('first');
      }, 1000);
    } catch (e) {
      toast.error('Erro ao editar produto');
    }
  };

  const GoThird = async (id) => {
    const response = await api.get('product', {
      params: {
        product_id: id,
      },
    });

    setLastest(response.data);
    setPage('third');
  };

  const PauseProduct = async () => {
    await api.put('changestatus', {
      product_id: latestInfo.product.id,
      status: 'closed',
    });

    setVisibleTwo(false);
    window.location.reload();
  };

  const RemovePause = async () => {
    const status = latestInfo.product.quantity === 0 ? 'soldout' : 'open';

    await api.put('changestatus', {
      product_id: latestInfo.product.id,
      status,
      paused_at: null,
    });

    setVisibleTwo(false);
    window.location.reload();
  };

  const DeleteItem = async () => {
    await api.put('changestatus', {
      product_id: latestInfo.product.id,
      status: 'deleted',
    });

    setVisibleTwo(false);
    window.location.reload();
  };

  const openProcess = async (id) => {
    const response = await api.get('product', {
      params: {
        product_id: id,
      },
    });

    setLastest(response.data);
    setVisibleTwo(true);
  };

  useEffect(() => {
    loadMyProducts();
  }, []);

  return (
    <Container>
      <DisplayFlex>
        {page !== 'first' && (
          <ButtonBack>
            <ButtonBack onClick={goBackButton}>
              <BiArrowBack size={60} />
            </ButtonBack>
          </ButtonBack>
        )}

        <Title>{TitleChoice(page)}</Title>
      </DisplayFlex>

      {page === 'first' && (
        <MyProductList
          data={myProducts}
          goNextClick={goNextClick}
          goEditProduct={GoThird}
          openProcess={openProcess}
        />
      )}
      {page === 'second' && (
        <SellsMyItem data={dataSells} openModal={OpenModal} />
      )}

      {page === 'third' && (
        <EditPage
          handleSubmit={handleSubmit}
          latestInfo={latestInfo.product}
          openModal={() => {
            setVisibleTwo(true);
          }}
        />
      )}

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

      {visibleTwo && (
        <ModalPause
          visible={visibleTwo}
          closeModal={() => {
            setVisibleTwo(false);
          }}
          product={latestInfo.product}
          pauseFunction={PauseProduct}
          unPauseFunction={RemovePause}
          deleteFunction={DeleteItem}
        />
      )}
    </Container>
  );
}
