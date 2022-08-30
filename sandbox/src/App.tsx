import React from 'react'
import * as Card from '../../src/Card/Card'

function App() {
  return (
    <div className="App">
      <Card.Card style={{
        width: '18rem',
        margin: '5em'
      }}>
        <Card.CardHeader>
          A card
        </Card.CardHeader>
        <Card.CardBody>
          <Card.CardTitle>
            Title
          </Card.CardTitle>
          <Card.CardText>
            Some quick example text o build on the card title and make up the bulk of the card's content.
          </Card.CardText>
        </Card.CardBody>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <Card.CardBody>
          <Card.CardLink href="#">Hi</Card.CardLink>
          <Card.CardLink href="#">Hi</Card.CardLink>
        </Card.CardBody>
        <Card.CardFooter>Goodbye!</Card.CardFooter>
      </Card.Card>
    </div>
  )
}

export default App
