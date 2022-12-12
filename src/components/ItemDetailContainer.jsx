import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../db/db";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState([]);

    const{ name, stock, img, description, category }= item;

    useEffect(() => {
        getProducts()
          .then((response) => {
            setItem(response);
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);
    
      const getProducts = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(PRODUCTS.find(e => e.id == id));
          }, 2000);
        });
      };

  return (
    <div className="relative shadow-2xl max-w-lg w-full cursor-pointer rounded-md mx-auto mt-0">
        <ItemDetail name={name} stock={stock} img={img} description={description} category={category}/>
    </div>
  )
}
export default ItemDetailContainer