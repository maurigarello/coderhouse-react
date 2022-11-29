import { useEffect, useState } from "react";
import Item from "./Item";


const Products = [
    { id: 1, name: 'ITEM UNO', stock: 12},
    { id: 2, name: 'ITEM DOS', stock: 14},
    { id: 3, name: 'ITEM TRES', stock: 18},
];

const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts().then( response => {
        setProducts( response );
      })
    }, [])
    
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve( Products )
            }, 3000)
        })
    }

  return (
    <div className="mx-auto max-w-sm max-justify-center">
        <h1 className="font-bold text-2xl text-cyan-800">Item List</h1>
        <ul>
        { products.map( p => <Item key={p.id} {...p} />) }
        </ul>
    </div>
  )
}

export default ItemList