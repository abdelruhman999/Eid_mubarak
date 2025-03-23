import Cardstyle from "./CardStyle/Cardstyle";
import { Base_Url } from "../calls/constant";

const Products = async () => {
  const response = await fetch(`${Base_Url}/api/products?page=1&page_size=100`, {
    cache: "no-store", 
  });
  const data = await response.json();

  return (<>
      {data.results.length > 0 ? (
        data.results.map((el: any) => (
          <Cardstyle key={el.id} props={el} />
        ))
      ) : (
        <p>No products available</p>
      )}
  </>);
};

export default Products;
