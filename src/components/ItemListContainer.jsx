import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const {category} = useParams();
  
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

  
  const catFilter = product.filter((prod) => prod.category === category);



  return (
    <>
    
    <div>
     {category? <ItemList prod={catFilter}/> : <ItemList prod={product}/>}
    </div>

    
    
    </>
  )
}

export default ItemListContainer