import React from 'react';
import { BsSearch, BsList } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Dropdown, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '~/assets/Cko_logo.png';
import {
  Text,
  Link,
  NavBarStyled,
  FormStyled,
  NavStyled,
  FormControlStyled,
  ButtonStyled,
  RowTesting,
  divButtons,
  DivNav,
  DivImageProfile,
  DivProfile,
  LinkSmall,
  Toggle,
} from './styles';
import { signOut } from '~/store/modules/auth/actions';

const NavBarStandard = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.profile.user.name).split(' ');

  const LogOut = () => {
    return dispatch(signOut());
  };

  return (
    <NavBarStyled bg="primary" variant="dark" className="p-2">
      <RowTesting>
        <Col xl="1" className="d-none d-xl-block">
          <NavBarStyled.Brand className="p-1">
            <img src={Logo} width={60} alt="logo" />
            <Text>C-CKO</Text>
          </NavBarStyled.Brand>
        </Col>

        <Col xl="7">
          <FormStyled inline>
            <FormControlStyled type="text" placeholder="Pesquisar produto" />

            <divButtons>
              <ButtonStyled
                variant="outline-dark"
                className="ml-2"
                onClick={() => console.log('hello')}
              >
                <BsSearch size={25} />
              </ButtonStyled>

              <ButtonStyled
                variant="outline-dark"
                className="ml-2"
                onClick={() => console.log('testing')}
              >
                <BsList size={25} />
              </ButtonStyled>

              <ButtonStyled
                variant="outline-dark"
                className="ml-2"
                onClick={() => console.log('testing')}
              >
                <AiOutlineShoppingCart size={25} />
              </ButtonStyled>
            </divButtons>
          </FormStyled>
        </Col>

        <Col xl="4">
          <NavStyled className="justify-content-xl-end justify-content-center ">
            <DivNav className="pt-2 pt-xl-0">
              <Link to="/homepage">Início</Link>
              <Link to="/createproduct">Criar produto</Link>
              <DivProfile>
                <DivImageProfile
                  src="https://www.rover.com/blog/wp-content/uploads/2019/07/maltese-puppy.jpg"
                  className="d-none d-xl-block"
                />

                <Dropdown id="dropdown-basic">
                  <Toggle>{name[0]}</Toggle>

                  <Dropdown.Menu alignRight>
                    <Dropdown.Item>
                      <LinkSmall to="/">Minha conta</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/">Minha localização</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/">Meus dados pessoais</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/">Meus produtos</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/">Minhas vendas</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/">Minhas compras</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/">Meu carrinho</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item onClick={LogOut}>Sair</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </DivProfile>
            </DivNav>
          </NavStyled>
        </Col>
      </RowTesting>
    </NavBarStyled>
  );
};

export default NavBarStandard;
