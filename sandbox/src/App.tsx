import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Alert from '../../src/Alert';
import AlertBody from '../../src/AlertBody';
import AlertHeading from '../../src/AlertHeading';
import AlertLink from '../../src/AlertLink';

import Button from '../../src/Button';

function App() {
  return (
    <div className="App">
      <Button
        fontWeight="bold"
        variant="light"
        my={5}
        m={5}
        border={1}
        float={["sm-end", "md-start"]}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
