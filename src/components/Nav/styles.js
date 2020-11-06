import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  Row,
  Navbar,
  Form,
  Nav,
  FormControl,
  Button,
  Dropdown,
} from 'react-bootstrap';

export const Text = styled.h6`
  margin-top: 5px;
  font-family: 'Raleway', sans-serif;
`;

export const Link = styled(NavLink)`
  color: white;
  font-size: 23px;
  margin-left: 15px;
  text-decoration: none;
  transiton: color 2s;
  text-align: center;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;

export const LinkSmall = styled(NavLink)`
  color: black;
  font-size: 16px;
  text-decoration: none;
  text-align: center;

  &:hover {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const NavBarStyled = styled(Navbar)`
  width: 100%;
  display: flex;
`;
export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const DivNav = styled.div`
  display: flex;
  align-items: center;
`;

export const divButtons = styled.div`
  margin-top: 5px;
`;

export const NavStyled = styled(Nav)`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%; ;
`;

export const FormControlStyled = styled(FormControl)`
  flex: 1;
`;

export const ButtonStyled = styled(Button)``;

export const RowTesting = styled(Row)`
  width: 100%;
  margin: 0px;
`;

export const DivImageProfile = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  margin: 0 auto;
`;

export const DivProfile = styled.div`
  margin-left: 5px;
`;

export const Toggle = styled(Dropdown.Toggle)`
  background: none;
  font-size: 16px;

  :hover {
    color: black;
  }
`;
