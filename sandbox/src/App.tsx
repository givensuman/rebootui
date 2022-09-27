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
import DropdownMenu from '../../src/DropdownMenu'
import DropdownMenuItem from '../../src/DropdownMenuItem'
import DropdownHeader from '../../src/DropdownHeader'
import DropdownText from '../../src/DropdownText'
import DropdownDivider from '../../src/DropdownDivider'



function App() {

  return (
    <div>
      <Dropdown>
        <DropdownButton css={{
          marginTop: '10em'
        }}>
          Hi mom
        </DropdownButton>
        <DropdownMenu>
          <DropdownHeader>
            welcome
          </DropdownHeader>
          <DropdownMenuItem>
            hi
          </DropdownMenuItem>
          <DropdownDivider />
          <DropdownMenuItem disabled>
            bye
          </DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default App;
