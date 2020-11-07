import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const List = styled.ul`
  max-height: 300px;
  margin-bottom: 10px;
  -webkit-overflow-scrolling: touch;
  padding: 10px;
  overflow-y: auto;
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
