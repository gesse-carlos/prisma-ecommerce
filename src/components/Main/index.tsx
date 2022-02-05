import { useAppSelector } from "../../hooks/reduxHooks";
import useProducts from "../../hooks/useProducts";

function Main() {
  const categoryID = useAppSelector((state) => state.shop.categoryId);
  const query = useAppSelector((state) => state.shop.query);

  const { products } = useProducts(categoryID, query);

  return (
    <h1>MAIN</h1>
  );
}

export default Main;