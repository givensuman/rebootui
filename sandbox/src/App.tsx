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
        my={['5', 'sm-2', 'md-3', 'lg-4']}
        border={1}
        borderEnd={1}
        rounded={'top'}
        borderRadius="2"
        color="danger"
        textOpacity={25}
        display={['sm-none', 'lg-none', 'xxl-inline']}
        flex={['lg-fill', 'grow-0']}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
