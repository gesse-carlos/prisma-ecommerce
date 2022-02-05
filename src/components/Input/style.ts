import styled from "styled-components";
import { IInputProps } from '../../types/InputProps';

export const ProductSearchInput = styled.input`
  width: 30vw;
  height: 38px;
  margin-top: 20px;
  border-radius: 3px 0 0 3px;

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const ProductCategoryInput = styled.input`
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const ProductCategoryLabel = styled.span`
  margin-left: 5px;
  color: ${(props) => props.theme.colors.white};
`;