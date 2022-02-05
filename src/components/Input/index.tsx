import React from 'react';

import { IInputProps } from '../../types/InputProps';

import { ProductSearchInput } from './style';

const SearchInput: React.FC<IInputProps> = (props) => {
  return (
    <div>
      <ProductSearchInput {...props} />
    </div>
  );
};

export default SearchInput;
