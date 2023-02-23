import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const ItemDetailContainer = () => {

    const {id} = useParams();
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



const itemDetail = product.filter((prod) => prod.id === parseInt(id));
const prueba = product.filter((prod) => prod.id === parseInt(id));
console.log(itemDetail);




  return (

   <>
   {itemDetail.map((prod) => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
            {prod.description}
          </Card.Text>
          <Button variant="primary">{prod.price}</Button>
        </Card.Body>
      </Card>
    )
   })}
   </>
   
   
  )
}

export default ItemDetailContainer