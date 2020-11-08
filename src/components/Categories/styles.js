import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const List = styled.ul`
  max-height: 300px;
  margin-bottom: 10px;
  padding: 10px;

  overflow-y: scroll;
`;

export const Item = styled.li`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  color: white;
  padding: 10px;
`;

export const ButtonItem = styled.button`
  width: 100%;
  margin: 5px 0 5px 0;
  border: none;
  border-radius: 2px;
  background: ${(props) => (props.selected ? '#212121' : '#9e9e9e')};

  &:hover {
    background: #757575;
  }
`;

export const ButtonSelect = styled(Button)`
  width: 100%;
`;

export const DivForCategory = styled.div`
  margin-bottom: 0px;
`;

export const TextCategory = styled.h5`
  width: 70%;
  font-family: 'Raleway', sans-serif;
`;

export const ButtonRemove = styled.button`
  border: none;

  outline: none !important;
  box-shadow: none !important;
  background: transparent;
`;

export const TextButton = styled.h6`
  font-family: 'Raleway', sans-serif;
  color: red;

  &:hover {
    font-weight: bold;
  }
`;
