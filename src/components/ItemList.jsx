import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemList = ({key, title, price,image}) => {

  return (
    <div>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{key}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        <Button variant="primary">{price}</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default ItemList