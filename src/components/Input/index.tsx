import React from 'react';

import { IInputProps } from '../../types/InputProps';

import { ProductSearchInput } from './style';

const SearchInput: React.FC<IInputProps> = (props) => {
  return <ProductSearchInput {...props} />;
};

export default SearchInput;
