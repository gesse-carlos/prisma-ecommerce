import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 10vh;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;