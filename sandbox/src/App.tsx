import React from 'react';
import Button from '../../src/Button';

function App() {
  return (
    <div className="App">
      <Button
        className="btn"
        marginTop="10em"
        css={`
          background-color: red;
        `}
        onClick={() => alert('hi')}
      >
        Hello
      </Button>
    </div>
  );
}

export default App;
