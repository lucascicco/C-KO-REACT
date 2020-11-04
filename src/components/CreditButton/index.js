import React from 'react';
import PropTypes from 'prop-types';
import { DivButton, Progress, Content, Text } from './styles';

export default function Button({ onClick, animation, outcome }) {
  return (
    <DivButton onClick={onClick} disabled={animation} outcome={outcome}>
      <Progress animation={animation} outcome={outcome} />
      <Content>
        <Text>
          {animation && outcome === null && 'Processando pagamento'}
          {!animation && !outcome && 'Efetuar pagamento'}
          {animation && outcome !== null && !outcome && 'Pagamento falhou'}
          {animation && outcome && 'Pagamento realizado com sucesso'}
        </Text>
      </Content>
    </DivButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  animation: PropTypes.bool.isRequired,
  outcome: PropTypes.bool,
};

Button.defaultProps = {
  outcome: null,
};
