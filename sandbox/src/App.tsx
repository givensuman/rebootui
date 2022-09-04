import React from 'react';
import Button from '../../src/Button/Button';

function App() {
  return (
    <div className="App">
      <Button
        variant="primary"
        size="lg"
        outlined={false}
        onClick={() => alert('hi')}
        css={{
          margin: '0.15em'
        }}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
