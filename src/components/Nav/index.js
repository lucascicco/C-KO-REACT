import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { BsSearch, BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '~/assets/Cko_logo.png';
import { Text } from './styles';

const NavBar = ({ onLogOut }) => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="xl"
      bg="primary"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand className="border border-dark">
        <img src={Logo} width={50} alt="logo" />
        <Text>C-CKO</Text>
      </ReactBootStrap.Navbar.Brand>

      <ReactBootStrap.Form
        className="justify-content-center border border-dark w-100"
        inline
      >
        <ReactBootStrap.FormControl
          type="text"
          placeholder="Pesquisar produto"
          className="mr-sm-6 w-50"
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
      </ReactBootStrap.Form>

      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="border border-dark align-items-center">
          <Link to="/homepage">
            <ReactBootStrap.Nav.Link href="homepage" className="h4">
              Início
            </ReactBootStrap.Nav.Link>
          </Link>
          <Link to="/createproduct">
            <ReactBootStrap.Nav.Link href="createproduct" className="h4">
              Criar produto
            </ReactBootStrap.Nav.Link>
          </Link>
          <Link to="/myprofile">
            <ReactBootStrap.Nav.Link href="myprofile" className="h4">
              Meu Perfil
            </ReactBootStrap.Nav.Link>
          </Link>
          <ReactBootStrap.Button
            variant="outline-dark"
            className="ml-2"
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
