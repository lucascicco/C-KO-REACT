import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { BsSearch, BsList } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import Logo from '~/assets/Cko_logo.png';
import { Text } from './styles';

const NavBar = ({ onLogOut }) => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="xl"
      bg="primary"
      variant="dark"
      className="border border-dark p-1 justify-content-center"
    >
      <ReactBootStrap.Navbar.Brand className="p-0">
        <img src={Logo} width={50} alt="logo" />
        <Text>C-CKO</Text>
      </ReactBootStrap.Navbar.Brand>

      <ReactBootStrap.Form className="justify-content-center  w-100 p-3" inline>
        <ReactBootStrap.FormControl
          type="text"
          placeholder="Pesquisar produto"
          className="w-50 p-2"
        />

        <ReactBootStrap.Button
          variant="outline-dark"
          className="ml-2"
          onClick={() => console.log('hello')}
        >
          <BsSearch size={25} />
        </ReactBootStrap.Button>

        <ReactBootStrap.Button
          variant="outline-dark"
          className="ml-2"
          onClick={() => console.log('testing')}
        >
          <BsList size={25} />
        </ReactBootStrap.Button>

        <ReactBootStrap.Button
          variant="outline-dark"
          className="ml-2"
          onClick={() => console.log('testing')}
        >
          <AiOutlineShoppingCart size={25} />
        </ReactBootStrap.Button>
      </ReactBootStrap.Form>

      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className=" align-items-center">
          <NavLink
            to="/homepage"
            style={{ textDecoration: 'none' }}
            className="h4 text-center text-light"
          >
            Início
          </NavLink>

          <NavLink
            to="/createproduct"
            style={{ textDecoration: 'none' }}
            className="h4 text-center  text-light"
          >
            Criar produto
          </NavLink>

          <NavLink
            to="/myprofile"
            style={{ textDecoration: 'none' }}
            className="h4 text-center  text-light"
          >
            Meu Perfil
          </NavLink>

          <ReactBootStrap.Button
            variant="outline-dark"
            className="ml-2 mr-2"
            onClick={onLogOut}
          >
            Sair
          </ReactBootStrap.Button>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default NavBar;
