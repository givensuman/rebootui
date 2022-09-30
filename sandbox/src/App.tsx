import React, { useState, useRef, useEffect } from 'react';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Box from '../../src/Box'
import { type GlobalProps } from '../../src/_reboot/types';

const Button = (props: GlobalProps) => {
  return (
    <Box
      as="a"
      py={4}
      aria-disabled={true}
      bgColor="info"
      css={`
        margin-top: 2em;
      `}
      {...props}
    >
      Click Me
    </Box>
  )
}

function App() {

  return (
    <div>

      <Button />

    </div>
  );
}

export default App;
