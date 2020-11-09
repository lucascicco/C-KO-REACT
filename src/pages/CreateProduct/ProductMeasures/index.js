import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';
import { Form } from '@rocketseat/unform';
import {
  Wrapper,
  ColWrapper,
  SameDiv,
  Input,
  Title,
  InputSmaller,
} from './styles';
import { Button, Description } from '../styles';
import ReactSelect from '~/components/ReactSelect';

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

export default function ProductMeasures() {
  const [format, setFormat] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLenght] = useState('');
  const [weight, setWeight] = useState('');
  const [diameter, setDiameter] = useState('');

  const [disabledHeight, setDisableHeight] = useState(true);
  const [disabledWidth, setDisableWidth] = useState(true);
  const [disabledDiameter, setDisableDiameter] = useState(true);

  const handlePickingFormat = (itemValue) => {
    setFormat(itemValue);

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

    console.log(data);
  };

  return (
    <Container>
      <Wrapper>
        <ColWrapper xl="6" md="9" lg="7">
          <Title>Medidas do produto</Title>

          <Form onSubmit={HandleSubmit}>
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
                onChange={(e) => setWeight(e.target.value)}
              />
              <Input
                name="length"
                type="text"
                maxLength={3}
                placeholder="Comprimento"
                value={length}
                onChange={(e) => setLenght(e.target.value)}
              />
            </SameDiv>

            <SameDiv>
              <InputSmaller
                name="height"
                type="text"
                placeholder="Altura"
                maxLength={3}
                value={height === 0 ? '' : height}
                onChange={(e) => setHeight(e.target.value)}
                disabled={disabledHeight}
              />

              <InputSmaller
                name="width"
                type="text"
                maxLength={3}
                placeholder="Largura"
                value={width === 0 ? '' : width}
                onChange={(e) => setWidth(e.target.value)}
                disabled={disabledWidth}
              />
              <InputSmaller
                name="diameter"
                type="text"
                maxLength={3}
                placeholder="Diamêtro"
                value={diameter === 0 ? '' : diameter}
                onChange={(e) => setDiameter(e.target.value)}
                disabled={disabledDiameter}
              />
            </SameDiv>

            <Button type="submit">Próximo</Button>
          </Form>
        </ColWrapper>
      </Wrapper>
    </Container>
  );
}
