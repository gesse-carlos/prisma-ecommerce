import React from "react";
import { Category } from "../../types/Category";
import { useAppDispatch } from '../../hooks/reduxHooks';
import { shopActions } from "../../redux/reducers/shop";
import useCategories from "../../hooks/useCategories";

import { CategoriesContainer } from './style';
import { CategoryInput } from "../Input";

function Aside() {
  const dispatch = useAppDispatch();
  const { categories } = useCategories();

  return (
    <CategoriesContainer>
      {
        categories && categories.map((category: Category) => (
          <CategoryInput
            type="radio"
            key={ category.id }
            className="category-input"
            id={ category.id }
            name="category"
            value={ category.name }
            labelText={ category.name }
            onClick={ () => dispatch(shopActions.setCategoryId(category.id)) }
          />
        ))
      }
    </CategoriesContainer>
  );
}

export default Aside;