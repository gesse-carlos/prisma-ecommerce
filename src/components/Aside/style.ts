import styled from "styled-components";

export const CategoriesContainer = styled.aside`
  display: flex;
  position: fixed;
  flex-direction: column;
  float: left;
  width: 25%;
  height: 85vh;
  background-color: ${(props) => props.theme.colors.secondary};
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(3, 206, 164);
    border-radius: 30px;
  }
`;
