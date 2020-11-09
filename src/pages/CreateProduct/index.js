import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { WarningText } from './styles';
import ImagePicker from './ImagePicking';
import ProductData from './ProductData';
import ProductMeasures from './ProductMeasures';

export default function CreateProduct() {
  const profile = useSelector((state) => state.user.profile);
  const [currentPage, setCurrentPage] = useState('third');

  const [animationOne, setAnimationOne] = useState(0);
  const [image, setImage] = useState('');
  const [data, setData] = useState('');

  const NextPageAnimation = (nextPage) => {
    setAnimationOne(window.innerWidth - (window.innerWidth / 100) * 30);

    setTimeout(() => {
      setCurrentPage(nextPage);
      setAnimationOne(0);
    }, 1000);
  };

  const HandleImage = (img) => {
    if (!img) {
      toast.warn('Por favor, escolha uma image.');
    } else {
      setImage(img);
      NextPageAnimation('second');
    }
  };

  const HandleForm = (dataParam) => {
    setData(dataParam);
    NextPageAnimation('third');
  };

  useEffect(() => {}, []);

  return (
    <Container>
      {profile.personal_data !== null && profile.location !== null ? (
        <>
          {currentPage === 'first' && (
            <ImagePicker
              animationOne={animationOne}
              HandleImage={HandleImage}
            />
          )}

          {currentPage === 'second' && (
            <ProductData HandleForm={HandleForm} animationOne={animationOne} />
          )}

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
