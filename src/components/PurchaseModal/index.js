import React from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ConvertBRL from '~/utils/ConvertMoney';
import Logo from '~/assets/Cko_logo.png';

import {
  TextInfo,
  TextCode,
  TextNormal,
  SellerText,
  SmallText,
  LogoImg,
} from './styles';

export default function PurchaseModal({ visible, item, setOff }) {
  const { purchase, seller_info } = item;

  const dateDeliver = format(new Date(purchase.deliver_date), 'dd/MM/yyyy');

  const price_product = ConvertBRL(purchase.total_price);

  return (
    <>
      <Modal show={visible} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title className="text-success">
            Compra realizada com sucesso
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={12}>
              <TextInfo>Código do pedido: </TextInfo>
              <TextCode>#{purchase.purchase_code}</TextCode>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <TextInfo>Valor total</TextInfo>
              <TextNormal>{price_product}</TextNormal>
            </Col>
            <Col xs={6} md={6}>
              <TextInfo>Entrega estimada até: </TextInfo>
              <TextNormal>{dateDeliver}</TextNormal>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col md={12}>
              <SellerText>Dados do vendedor</SellerText>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={6}>
              <TextInfo>Nome</TextInfo>
              <TextNormal>{seller_info.name}</TextNormal>
            </Col>
            <Col xs={6} md={6}>
              <TextInfo>Telefone</TextInfo>
              <TextNormal>{seller_info.cellphone}</TextNormal>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <TextInfo>Email</TextInfo>
              <TextNormal>{seller_info.email}</TextNormal>
            </Col>
          </Row>

          <Row className="border-top border-#ced4da pt-3">
            <Col xs={3} md={3}>
              <LogoImg src={Logo} />
            </Col>
            <Col xs={9} md={9}>
              <SmallText>
                {' '}
                Agradecemos pela sua confiança. Mas, agora é com a nossa equipe
                trabalhar com qualidade para garantir que seu pedido seja um
                sucesso. EQUIPE C-KO.
              </SmallText>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={setOff}>
            Continuar comprando
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

PurchaseModal.propTypes = {
  item: PropTypes.shape({
    purchase: PropTypes.shape({
      purchase_code: PropTypes.string.isRequired,
      createdAt: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
      ]),
      total_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      deliver_date: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
      ]),
    }).isRequired,
    seller_info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cellphone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }),
  visible: PropTypes.bool.isRequired,
  setOff: PropTypes.func.isRequired,
};

PurchaseModal.defaultProps = {
  item: {},
};
