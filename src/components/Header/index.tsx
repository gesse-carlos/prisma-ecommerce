import React from 'react';

import { Header } from './style';
import SearchInput from '../Input';

function ContentHeader() {
  return (
    <Header>
      <h1>Header</h1>
      <SearchInput
        type="text"
        name="query"
        placeholder="Buscar produtos..."
      />
    </Header>
  );
}

export default ContentHeader;
