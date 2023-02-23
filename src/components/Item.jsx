import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id,title,image,description,price}) => {
   
  return (
    <div>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        <Button variant="primary"><Link to={`/item/${id}`}> Detalles</Link></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item