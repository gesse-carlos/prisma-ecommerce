import React from 'react';

import { IInputProps } from '../../types/InputProps';

import { ProductSearchInput, ProductCategoryInput, ProductCategoryLabel } from './style';

export const SearchInput: React.FC<IInputProps> = (props) => {
  return <ProductSearchInput { ...props } />;
};

export const CategoryInput: React.FC<IInputProps> = (props) => {
  return (
    <label htmlFor={ props.name }>
      <ProductCategoryInput { ...props } />
      <ProductCategoryLabel>{ props.value }</ProductCategoryLabel>
    </label>
  )
};
