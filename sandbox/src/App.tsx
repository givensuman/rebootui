import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Box from '../../src/Box';
import Button from '../../src/Button';
import ButtonGroup from '../../src/ButtonGroup';
import Alert from '../../src/Alert';
import AlertHeading from '../../src/AlertHeading';
import AlertLink from '../../src/AlertLink';
import Breadcrumb from '../../src/Breadcrumb';
import BreadcrumbItem from '../../src/BreadcrumbItem';
import Collapse from '../../src/Collapse';
import CollapseBody from '../../src/CollapseBody';
import CollapseButton from '../../src/CollapseButton';

function App() {
  return (
    <div>
      <Collapse>
        <CollapseButton className="123">Click Me</CollapseButton>
        <CollapseBody>aslkdhjaikejgqlwjegkqjwgeaslkjgd</CollapseBody>
      </Collapse>
      <Button className="123">
        Test
      </Button>
    </div>
  );
}

export default App;
