import Cardstyle from "./CardStyle/Cardstyle";
import { Base_Url } from "../calls/constant";
import { Pagination } from "@/types/base";
import { Product } from "@/types/product";

const Products = async () => {
  const response = await fetch(`${Base_Url}/api/products?page=1&page_size=100`, {
    cache: "no-store", 
  });
  const data:Pagination<Product> = await response.json();

  return (<>
      {data.results.length > 0 ? (
        data.results.map((el) => (
          <Cardstyle 
            key={el.id} 
            image={el.image} 
            name={el.name} 
            id={el.id} 
            colors={el.colors} 
            />
        ))
      ) : (
        <p>No products available</p>
      )}
  </>);
};

export default Products;
