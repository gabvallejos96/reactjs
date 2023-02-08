import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <h1>{greeting}</h1>

    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.freebiesupply.com/logos/large/2x/razer-logo-png-transparent.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
    </>
  )
}

export default ItemListContainer