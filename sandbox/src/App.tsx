import React, { useState, useRef, useEffect } from 'react';
import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// import Alert from '../../src/Alert';
// import AlertBody from '../../src/AlertBody';
// import AlertHeading from '../../src/AlertHeading';
// import AlertLink from '../../src/AlertLink';

// import Button from '../../src/Button';

import Collapse from '../../src/Collapse'
import CollapseBody from '../../src/CollapseBody'
import CollapseButton from '../../src/CollapseButton'

import Spinner from '../../src/Spinner'
import Tooltip from '../../src/Tooltip'

import Dropdown from '../../src/Dropdown'
import DropdownButton from '../../src/DropdownButton'


function App() {

  return (
    <div>
      <Dropdown>
        <DropdownButton css={{
          marginTop: '10em'
        }}>
          Hi mom
        </DropdownButton>
      </Dropdown>
    </div>
  )
}

export default App;
