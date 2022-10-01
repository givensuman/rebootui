import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Button from '../../src/Button';
import ButtonGroup from '../../src/ButtonGroup';
import Alert from '../../src/Alert';
import AlertHeading from '../../src/AlertHeading';
import AlertLink from '../../src/AlertLink';

function App() {
  return (
    <div>
      <Alert maxWidth="100" width="25" dismissible>
        <AlertHeading>Hello</AlertHeading>
        Hello Hello Hello Hello Hello
        <hr />
        <AlertLink as="a" ms="4" href="123">
          Go here
        </AlertLink>
      </Alert>
    </div>
  );
}

export default App;
