import styled from 'styled-components';

export const Button = styled.button`
  height: 44px;
  background: ${(props) => props.background};
  font-weight: bold;
  color: #fff;
  width: 48%;
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  transition: border-radius 0.7s;
  outline: none !important;
  box-shadow: none !important;

  &:hover {
    border-radius: 15px;
  }
`;

export const TextNormal = styled.p`
  font-size: 18px;
  text-align: start;
  word-break: break-word;
`;

export const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StrongText = styled.strong``;

export const TextDays = styled.h6``;
