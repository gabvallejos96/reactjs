import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
  
  
  const url = "https://fakestoreapi.com/products";
 
  const getProducts = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado;
  }

  const [product, setProduct] = useState([]);


  useEffect(()=>{
    getProducts().then((product) => setProduct(product));
  },[])




  return (
    <>
    <h1>{greeting}</h1>

    <div className='productsContainer'>

    {product.map((prod)=>{
      console.log(prod);
      return (
        <ItemList
        key={prod.id}
        title={prod.title}
        price={prod.price}
        image={prod.image}
        />
      );
    })}

    </div>
    
    </>
  )
}

export default ItemListContainer