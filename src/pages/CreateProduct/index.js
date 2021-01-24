import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { WarningText } from './styles';
import ImagePicker from './ImagePicking';
import ProductData from './ProductData';
import ProductMeasures from './ProductMeasures';
import api from '~/services/api';
import history from '~/services/history';

export default function CreateProduct() {
  const profile = useSelector((state) => state.user.profile);
  const [currentPage, setCurrentPage] = useState('first');

  const [animationOne, setAnimationOne] = useState(0);
  const [image, setImage] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleMeasures = async (measures) => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append('file', image);

      formData.append('product_name', data.product_name);
      formData.append('category', data.category);
      formData.append('quantity', data.quantity);
      formData.append('description', data.description);
      formData.append('price', data.price);

      const response_one = await api.post('features', measures);

      formData.append('features', response_one.data.id);

      await api.post('product', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccess(true);

      history.push('/myproducts');
      history.go();
    } catch (e) {
      toast.error('Erro no servidor, tente mais tarde. Agradecemos.');
    }
    setLoading(false);
  };

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

          {currentPage === 'third' && (
            <ProductMeasures
              handleSubmit={handleMeasures}
              animationOne={animationOne}
              loading={loading}
              success={success}
            />
          )}
        </>
      ) : (
        <div>
          <WarningText>
            Antes de criar o anúncio do produto, é necessário registrar sua
            localização e dados pessoais no nosso sistema.
          </WarningText>
          <WarningText>
            No canto superior direito, acesse seu perfil.
          </WarningText>
        </div>
      )}
    </Container>
  );
}
