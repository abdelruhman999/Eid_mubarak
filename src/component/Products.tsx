import Cardstyle from "./CardStyle/Cardstyle";
import { Base_Url } from "../calls/constant";


const Products = async () => {
  const response = await fetch(`${Base_Url}/api/products?page=1&page_size=10`, {
    cache: "no-store", 
  });
  const data = await response.json();
  // console.log(data);
  
     
  

  return (
    <div className="flex justify-center gap-[50px] flex-wrap w-full p-[50px]">
      {data.results.length > 0 ? (
        data.results.map((el: any) => (
          
       
            <Cardstyle
              key={el.id}
              id={el.id}
              image={el.image}
              name={el.name}
              colors={el.colors}
              el = {el} 
              season={el.season.name} 
            />

         
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Products;
