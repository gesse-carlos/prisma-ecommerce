import styled from "styled-components";

export const ContentHeader = styled.header`
  display: flex;
  width: 100vw;
  height: 15vh;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const SearchButton = styled.button`
  background-color: rgb(255, 255, 255);
  color: ${(props) => props.theme.colors.black};
  background-repeat: no-repeat;
  border: none;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  margin-top: 25px;
  padding: 4px 6px 4px 4px;
  font-size: 1.5rem;
`;

export const CartButton = styled.button`
  background-color: Transparent;
  color: ${(props) => props.theme.colors.white};
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  margin-left: 29vw;
  font-size: 2rem;
`;

export const PrismaLogo = styled.img`
  width: 20vw;
  height: 5vh;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  margin-left: 13vw;
`;

export const LogoContainer = styled.span`
  display: flex;
`;

export const CartButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const CartQuantity = styled.span`
  margin-top: 5px;
  color: rgb(3, 206, 164);
  font-weight: 700;
`;