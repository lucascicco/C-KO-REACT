import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ColWrapper,
  ProductImage,
  Label,
  InputFile,
  Title,
  DivLabel,
  DivWrapper,
  Descriptrion,
} from './styles';
import { Button } from '../styles';

export default function ImagePicking({ style, HandleImage }) {
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  const HandleChange = (e) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    setImage(e.target.files[0]);
  };

  return (
    <Wrapper style={style}>
      <ColWrapper xl="5" md="8" lg="6">
        <Title>Escolha a imagem</Title>

        <DivLabel>
          <Label htmlFor="avatar">
            <DivWrapper>
              <ProductImage src={preview} />
              {!preview && <Descriptrion>Clique aqui</Descriptrion>}
            </DivWrapper>

            <InputFile
              type="file"
              id="avatar"
              accept="image/*"
              data-file={image}
              onChange={HandleChange}
            />
          </Label>
        </DivLabel>

        <Button
          onClick={() => {
            HandleImage(image);
          }}
        >
          Próximo
        </Button>
      </ColWrapper>
    </Wrapper>
  );
}

ImagePicking.propTypes = {
  style: PropTypes.string.isRequired,
  HandleImage: PropTypes.func.isRequired,
};
