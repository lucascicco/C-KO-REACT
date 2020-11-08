import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Motion, spring } from 'react-motion';
import { toast } from 'react-toastify';
import { WarningText } from './styles';
import ImagePicker from './ImagePicking';
import ProductData from './ProductData';
import ProductMeasures from './ProductMeasures';

export default function CreateProduct() {
  const profile = useSelector((state) => state.user.profile);
  const [currentPage, setCurrentPage] = useState('second');

  const [image, setImage] = useState('');

  const HandleImage = (img) => {
    if (!img) {
      return toast.warn('Por favor, escolha uma image.');
    }
    setImage(img);
    setCurrentPage('second');
  };

  return (
    <Container>
      {profile.personal_data !== null && profile.location !== null ? (
        <>
          {currentPage === 'first' && (
            <Motion
              defaultStyle={{
                x: -window.innerWidth,
              }}
              style={{ x: spring(0, { stiffness: 200, damping: 100 }) }}
            >
              {(style) => (
                <ImagePicker
                  style={{ transform: `translateX(${style.x}px)` }}
                  HandleImage={HandleImage}
                />
              )}
            </Motion>
          )}
          {currentPage === 'second' && <ProductData />}
          {currentPage === 'third' && <ProductMeasures />}
        </>
      ) : (
        <WarningText>
          Antes de criar o produto, é necessário registrar sua localização e
          dados pessoais no nosso sistema. No canto superior direito, acesse seu
          perfil.
        </WarningText>
      )}
    </Container>
  );
}
