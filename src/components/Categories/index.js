import React from 'react';
import { Modal, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Categorias from '~/utils/Categorias';
import {
  List,
  Item,
  ButtonItem,
  ButtonSelect,
  DivForCategory,
  TextCategory,
  ButtonRemove,
  TextButton,
} from './styles';

export default function Categories({
  addCategory,
  selectedButton,
  closeModal,
  category,
  visible,
  setFilter,
  currentCategory,
  currentFilter,
  removeCategory,
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
        {currentCategory !== 0 && (
          <DivForCategory>
            <TextCategory>{currentFilter}</TextCategory>
            <ButtonRemove onClick={removeCategory}>
              <TextButton>Remover filtro</TextButton>
            </ButtonRemove>
          </DivForCategory>
        )}
        <Row>
          <Col xs={12} md={12}>
            <List>
              {Categorias.map((item) => {
                return (
                  <ButtonItem
                    selected={category === item.category_id}
                    onClick={() => {
                      addCategory(item.category_id);
                      setFilter(item.category);
                    }}
                    key={item.category_id.toString()}
                  >
                    <Item>{item.category}</Item>
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
  setFilter: PropTypes.func.isRequired,
  currentCategory: PropTypes.number.isRequired,
  currentFilter: PropTypes.string.isRequired,
  removeCategory: PropTypes.func.isRequired,
};
