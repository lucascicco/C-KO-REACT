import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #303f9f;
  font-weight: bold;
  color: #fff;
  width: 100%;
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  transition: background 0.2s;
  outline: none !important;
  box-shadow: none !important;

  &:hover {
    background: ${lighten(0.03, '#3f51b5')};
  }
`;

export const EmailBox = styled.textarea`
  background: #607d8b;
  border: 0;
  border-radius: 2px;
  height: 100px;
  color: white;
  width: 100%;
  margin: 0 0 10px;

  font-size: 17px;
  max-height: 200px;
  padding: 15px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const SellerText = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  width: 100%;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  padding: 15px 0px;
`;

export const TextInfo = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  text-align: start;
`;

export const TextNormal = styled.p`
  font-size: 18px;
  text-align: start;
  word-break: break-word;
`;
