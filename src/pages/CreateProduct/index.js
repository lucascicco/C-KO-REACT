import React, { useState, useEffect } from 'react';
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
  const [data, setData] = useState('');

  const HandleImage = (img) => {
    if (!img) {
      toast.warn('Por favor, escolha uma image.');
    } else {
      setImage(img);
      setCurrentPage('second');
    }
  };

  const HandleForm = (dataParam) => {
    setData(dataParam);
  };

  useEffect(() => {}, []);

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
          {currentPage === 'second' && <ProductData HandleForm={HandleForm} />}
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
