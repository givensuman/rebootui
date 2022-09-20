import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import Alert from '../../src/Alert'
import AlertBody from '../../src/AlertBody'
import AlertHeading from '../../src/AlertHeading'
import AlertLink from '../../src/AlertLink'

import Button from '../../src/Button'

function App() {
  return (
    <div className="App">
      <Button
        fontWeight="bold"
        variant="secondary"
        my={["5", "sm-2", "md-3", "lg-4"]}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
