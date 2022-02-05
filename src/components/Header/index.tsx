import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { BsFillCartFill, BsSearch } from "react-icons/bs";

import { shopActions } from '../../redux/reducers/shop';
import {
  ContentHeader,
  SearchButton,
  CartButton,
  PrismaLogo,
  InputContainer,
  LogoContainer,
  CartButtonContainer,
  CartQuantity,
} from './style';
import { SearchInput } from '../Input';

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
  };

  const handleClick = () => dispatch(shopActions.setQuery(query));

  const cartQuantity = useAppSelector((state) => state.cart.quantity);

  return (
    <ContentHeader>
      <LogoContainer>
        <PrismaLogo
          src="/prisma-2.svg"
          alt="prisma logo"
          className="prisma-logo"
        />
      </LogoContainer>
      <InputContainer className="search-input-container">
        <SearchInput
          type="text"
          name="query"
          placeholder="Buscar produtos..."
          onChange={ handleChange }
        />
        <SearchButton
          type="button"
          onClick={ handleClick }
        >
          <BsSearch className="icon-svg" />
        </SearchButton>
        <CartButtonContainer>
          <CartButton
            type="button"
            onClick={ () => navigate('/cart') }
          >
            <BsFillCartFill className="icon-svg" />
          </CartButton>
          <CartQuantity>{ cartQuantity === 0 ? '' : cartQuantity }</CartQuantity>
        </CartButtonContainer>
      </InputContainer>
    </ContentHeader>
  );
}

export default Header;
