import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { MdSecurity } from 'react-icons/md';

export const Wrapper = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  min-height: 90%;
`;

export const ColWrapper = styled(Col)``;

export const DivWrapper = styled.div`
  text-align: center;
  border: 1px solid red;
`;

export const Icon = styled(MdSecurity)`
  border: 1px solid red;
`;

export const FontSize = styled.h2`
  color: white;
  font-size: 55px;
  font-family: 'Raleway', sans-serif;
`;
