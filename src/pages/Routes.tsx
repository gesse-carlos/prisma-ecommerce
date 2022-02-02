import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { Cart, Home, ProductDetails } from '.';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={ <Home /> } />
        <Route path="/cart/*" element={ <Cart /> } />
        <Route path="/product/:id/*" element={ <ProductDetails /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
