import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { WarningText } from './styles';
import ImagePicker from './ImagePicking';
import ProductData from './ProductData';
import ProductMeasures from './ProductMeasures';

export default function CreateProduct() {
  const profile = useSelector((state) => state.user.profile);
  const [currentPage, setCurrentPage] = useState('first');

  useEffect(() => {}, []);

  return (
    <Container>
      {profile.personal_data !== null && profile.location !== null ? (
        <>
          {currentPage === 'first' && <ImagePicker />}
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
