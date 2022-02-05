import { useState, useEffect } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/categories";
      const response = await (await fetch(url)).json();

      setCategories(response);
    }

    fetchCategories();
  }, []);

  return { categories };
}

export default useCategories;