import React, { useState } from 'react';
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
  DivButtons,
  DivNav,
  DivImageProfile,
  DivProfile,
  LinkSmall,
  Toggle,
} from './styles';
import { signOut } from '~/store/modules/auth/actions';
import history from '~/services/history';
import Categories from '../Categories';

import {
  OpenModal,
  CloseModal,
  addCategory,
  addFilter,
  addSearchText,
  removeCategory,
  removeFilter,
} from '~/store/modules/filters/actions';

const NavBarStandard = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile.user);
  const modal = useSelector((state) => state.products.category_modal);
  const filters = useSelector((state) => state.filters);

  const [category, setCategory] = useState(filters.filters.categorySelectedId);
  const [filter, setFilter] = useState('');

  const name = profile.name.split(' ');
  const UserName = name[0].length > 10 ? `${name[0].slice(0, 7)}...` : name[0];

  const SelectCategory = () => {
    dispatch(addCategory(category));
    dispatch(addFilter(filter));
    dispatch(CloseModal());
  };

  const CategoryAdd = (id) => {
    setCategory(id);
  };

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
            <FormControlStyled
              type="text"
              placeholder="Pesquisar produto"
              value={filters.filters.searchText}
              onChange={(e) => dispatch(addSearchText(e.target.value))}
            />

            <DivButtons>
              <ButtonStyled
                variant="outline-dark"
                className="ml-2"
                onClick={() => {
                  if (history.location.pathname !== '/homepage') {
                    history.push('/homepage');
                    history.go();
                  }
                }}
              >
                <BsSearch size={25} />
              </ButtonStyled>

              <ButtonStyled
                variant="outline-dark"
                className="ml-2"
                onClick={() => dispatch(OpenModal())}
              >
                <BsList size={25} />
              </ButtonStyled>

              <ButtonStyled
                variant="outline-dark"
                className="ml-2"
                active={window.location.href.includes('/mycart')}
                onClick={() => {
                  history.push('/mycart');
                  history.go();
                }}
              >
                <AiOutlineShoppingCart size={25} />
              </ButtonStyled>
            </DivButtons>
          </FormStyled>
        </Col>

        <Col xl="4">
          <NavStyled className="justify-content-xl-end justify-content-center ">
            <DivNav className="pt-2 pt-xl-0">
              <Link to="/homepage">Início</Link>
              <Link
                to="/createproduct"
                activeStyle={{
                  color: 'black',
                }}
              >
                Criar produto
              </Link>
              <DivProfile>
                <DivImageProfile
                  src={
                    profile.avatar ||
                    'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png'
                  }
                  className="d-none d-xl-block"
                />

                <Dropdown id="dropdown-basic">
                  <Toggle>{UserName}</Toggle>

                  <Dropdown.Menu alignRight>
                    <Dropdown.Item>
                      <LinkSmall to="/myaccount">Minha conta</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/mylocation">Minha localização</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/mypersonal">
                        Meus dados pessoais
                      </LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/myproducts">Meus produtos</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/mysells">Minhas vendas</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/mypurchases">Minhas compras</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <LinkSmall to="/mycart">Meu carrinho</LinkSmall>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item onClick={LogOut}>Sair</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </DivProfile>
            </DivNav>
          </NavStyled>
        </Col>

        <Categories
          addCategory={CategoryAdd}
          selectedButton={SelectCategory}
          visible={modal}
          category={category}
          setFilter={(filterName) => {
            setFilter(filterName);
          }}
          closeModal={() => {
            dispatch(CloseModal());
          }}
          currentCategory={filters.filters.categorySelectedId}
          currentFilter={filters.filters.filter}
          removeCategory={() => {
            dispatch(removeCategory());
            dispatch(removeFilter());
            setFilter('');
            setCategory(0);
          }}
        />
      </RowTesting>
    </NavBarStyled>
  );
};

export default NavBarStandard;
