import React, { InputHTMLAttributes } from 'react';

import { IInputProps } from '../../types/InputProps'; 

const SearchInput: React.FC<IInputProps> = (props) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export default SearchInput;
