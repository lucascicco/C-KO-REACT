import React from 'react';
import { Modal, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Categorias from '~/utils/Categorias';
import { List, Item, ButtonItem, ButtonSelect } from './styles';

export default function Categories({
  addCategory,
  selectedButton,
  closeModal,
  category,
  visible,
}) {
  return (
    <Modal
      show={visible}
      backdrop="static"
      onHide={closeModal}
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">Escolha a categoria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={12}>
            <List>
              {Categorias.map((item) => {
                return (
                  <ButtonItem
                    onClick={() => {
                      addCategory(item.category_id);
                    }}
                  >
                    <Item
                      id={item.category_id}
                      selected={category === item.category_id}
                    >
                      {item.category}
                    </Item>
                  </ButtonItem>
                );
              })}
            </List>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <ButtonSelect variant="secondary" onClick={selectedButton}>
          Filtrar por categoria
        </ButtonSelect>
      </Modal.Footer>
    </Modal>
  );
}

Categories.propTypes = {
  addCategory: PropTypes.func.isRequired,
  selectedButton: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  category: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
};
