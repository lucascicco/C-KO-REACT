import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Col, Row } from 'react-bootstrap';
import { formatDistanceStrict, addDays, isAfter } from 'date-fns';

import { TextNormal, FlexDiv, Button, StrongText, TextDays } from './styles';

export default function ModalPause({
  visible,
  closeModal,
  product,
  pauseFunction,
  unPauseFunction,
  deleteFunction,
}) {
  const FreeDate = addDays(new Date(product.paused_at), 15);
  const currentDate = new Date();

  const DaysMissing = formatDistanceStrict(currentDate, FreeDate, {
    unit: 'day',
  }).replace('days', 'dias');

  const isAvailableToChange = isAfter(currentDate, FreeDate);

  return (
    <>
      <Modal show={visible} onHide={closeModal} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-secondary">
            ACORDO - PAUSA DE ANÚNCIO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mt-3 mb-3">
            <Col md={12}>
              <TextNormal>
                {' '}
                Para evitarmos complicações em nossa aplicação, estabelecemos um
                acordo para quando o anúncio é pausado pelo vendedor, em que é
                necessário uma análise da nossa administração sobre o produto em
                pauta, e quando feita a análise, liberaremos duas opções que
                caberão apenas ao vendedor a escolher.
              </TextNormal>

              <TextNormal>
                {' '}
                A primeira é a exclusão do produto, essa opção torna o produto
                permanentemente inativo.
              </TextNormal>

              <TextNormal>
                {' '}
                A segunda é despausar o anúncio, dando assim continuidade na
                venda.
              </TextNormal>

              <TextNormal>
                {' '}
                Entretanto, ambas dessas opções serão apenas liberadas num
                período de 15 dias após a pausa do anúncio.
              </TextNormal>

              <TextNormal>Agradecemos a atenção. Conte conosco.</TextNormal>

              {product.status === 'closed' && (
                <TextDays>
                  Dias restantes para liberação:
                  <StrongText>{DaysMissing}</StrongText>
                </TextDays>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <FlexDiv>
            {product.status === 'open' ? (
              <>
                <Button onClick={pauseFunction} background="#e53935">
                  Pausar anúncio
                </Button>
                <Button onClick={closeModal} background="#757575">
                  Cancelar
                </Button>
              </>
            ) : (
              <>
                {isAvailableToChange && (
                  <>
                    <Button onClick={deleteFunction} background="#e53935">
                      Excluir
                    </Button>
                    <Button onClick={unPauseFunction} background="#4caf50">
                      Despausar
                    </Button>
                  </>
                )}
              </>
            )}
          </FlexDiv>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ModalPause.propTypes = {
  closeModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  product: PropTypes.shape({
    status: PropTypes.string.isRequired,
    paused_at: PropTypes.oneOfType([
      PropTypes.instanceOf(null),
      PropTypes.string,
    ]).isRequired,
  }).isRequired,
  pauseFunction: PropTypes.func.isRequired,
  unPauseFunction: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};
