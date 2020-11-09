import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  SameDiv,
  Input,
  Title,
  InputSmaller,
  WarningText,
  WarningButton,
  DivButtonWarning,
  DivButton,
  Progress,
  Content,
  Text,
} from './styles';
import { Wrapper, ColWrapper } from '../styles';
import ReactSelect from '~/components/ReactSelect';
import { onChange_onlyNumber } from '~/utils/RestrictInputs';
import CorreiosValidation from '~/utils/CorreiosValidation';

const formats = [
  {
    id: 1,
    title: 'Formato caixa/pacote',
  },
  {
    id: 2,
    title: 'Formato rolo/prisma',
  },
  {
    id: 3,
    title: 'Envelope',
  },
];

export default function ProductMeasures({
  handleSubmit,
  animationOne,
  loading,
  success,
}) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLenght] = useState('');
  const [weight, setWeight] = useState('');
  const [diameter, setDiameter] = useState('');

  const [disabledHeight, setDisableHeight] = useState(true);
  const [disabledWidth, setDisableWidth] = useState(true);
  const [disabledDiameter, setDisableDiameter] = useState(true);

  const handlePickingFormat = (itemValue) => {
    switch (itemValue) {
      case 3:
        setDisableHeight(true);
        setDisableDiameter(true);
        setDisableWidth(false);
        setDiameter(0);
        setHeight(0);
        break;
      case 2:
        setDisableHeight(true);
        setDisableWidth(true);
        setDisableDiameter(false);
        setHeight(0);
        setWidth(0);
        break;
      case 1:
        setDisableHeight(false);
        setDisableWidth(false);
        setDisableDiameter(true);
        setDiameter(0);
        break;
      default:
        setDisableHeight(true);
        setDisableWidth(true);
        setDisableDiameter(true);
    }
  };

  const HandleSubmit = (data) => {
    Object.keys(data).forEach((key) => {
      data[key] = Number(data[key]);
    });

    if (CorreiosValidation(data)) {
      handleSubmit(data);
    } else {
      toast.error('Preencha os campos de acordo com as medidas corretas.');
    }
  };

  return (
    <Wrapper>
      <Motion
        defaultStyle={{
          x: -window.innerWidth,
        }}
        style={{ x: spring(animationOne, { stiffness: 200, damping: 100 }) }}
      >
        {(style) => (
          <ColWrapper
            xl="6"
            md="9"
            lg="7"
            style={{ transform: `translateX(${style.x}px)` }}
          >
            <Title>Medidas do produto</Title>

            <Form onSubmit={HandleSubmit} autoComplete="off">
              <ReactSelect
                name="format"
                placeholder="Selecione o formato"
                options={formats}
                onChange={(e) => handlePickingFormat(e.id)}
              />

              <SameDiv>
                <Input
                  name="weight"
                  type="text"
                  placeholder="Peso"
                  maxLength={2}
                  value={weight}
                  onChange={(e) =>
                    onChange_onlyNumber(e.target.value, setWeight)
                  }
                />
                <Input
                  name="length"
                  type="text"
                  maxLength={3}
                  placeholder="Comprimento"
                  value={length}
                  onChange={(e) =>
                    onChange_onlyNumber(e.target.value, setLenght)
                  }
                />
              </SameDiv>

              <SameDiv>
                <InputSmaller
                  name="height"
                  type="text"
                  placeholder="Altura"
                  maxLength={3}
                  value={height === 0 ? '' : height}
                  onChange={(e) =>
                    onChange_onlyNumber(e.target.value, setHeight)
                  }
                  disabled={disabledHeight}
                />

                <InputSmaller
                  name="width"
                  type="text"
                  maxLength={3}
                  placeholder="Largura"
                  value={width === 0 ? '' : width}
                  onChange={(e) =>
                    onChange_onlyNumber(e.target.value, setWidth)
                  }
                  disabled={disabledWidth}
                />
                <InputSmaller
                  name="diameter"
                  type="text"
                  maxLength={3}
                  placeholder="Diamêtro"
                  value={diameter === 0 ? '' : diameter}
                  onChange={(e) =>
                    onChange_onlyNumber(e.target.value, setDiameter)
                  }
                  disabled={disabledDiameter}
                />
              </SameDiv>

              <WarningText>
                Todas as medidas devem ser feitas incluindo a embalagem. Valores
                de dimensões são dados em (CM). Já, o peso é dado (KG). Apenas
                números inteiros.
              </WarningText>

              <DivButtonWarning>
                <WarningButton
                  type="button"
                  onClick={() => {
                    window.open(
                      'https://www.correios.com.br/enviar-e-receber/precisa-de-ajuda/limites-de-dimensoes-e-peso'
                    );
                  }}
                >
                  Ver medidas
                </WarningButton>
              </DivButtonWarning>

              <DivButton
                type="submit"
                disabled={loading || success}
                outcome={success}
              >
                <Progress animation={loading} outcome={success} />
                <Content>
                  <Text>
                    {!loading && !success && 'Registrar produto'}
                    {loading && !success && 'Carregando...'}
                    {!loading && success && 'Produto criado com sucesso'}
                  </Text>
                </Content>
              </DivButton>
            </Form>
          </ColWrapper>
        )}
      </Motion>
    </Wrapper>
  );
}

ProductMeasures.propTypes = {
  animationOne: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,

  success: PropTypes.bool.isRequired,
};
