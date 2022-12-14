import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Box from '../../src/Box';
import Button from '../../src/Button';
import CloseButton from '../../src/CloseButton';
import ButtonGroup from '../../src/ButtonGroup';
import Alert from '../../src/Alert';
import AlertHeading from '../../src/AlertHeading';
import AlertLink from '../../src/AlertLink';
import Breadcrumb from '../../src/Breadcrumb';
import BreadcrumbItem from '../../src/BreadcrumbItem';
import Collapse from '../../src/Collapse';
import CollapseBody from '../../src/CollapseBody';
import CollapseButton from '../../src/CollapseButton';
import Tooltip from '../../src/Tooltip';
import Spinner from '../../src/Spinner';
import Dropdown from '../../src/Dropdown';
import DropdownButton from '../../src/DropdownButton';
import DropdownDivider from '../../src/DropdownDivider';
import DropdownHeader from '../../src/DropdownHeader';
import DropdownMenu from '../../src/DropdownMenu';
import DropdownMenuItem from '../../src/DropdownMenuItem';
import DropdownText from '../../src/DropdownText';
import ListGroup from '../../src/ListGroup';
import ListGroupItem from '../../src/ListGroupItem';
import Modal from '../../src/Modal';
import ModalBody from '../../src/ModalBody';
import ModalHeader from '../../src/ModalHeader';
import ModalFooter from '../../src/ModalFooter';
import ModalTitle from '../../src/ModalTitle';
import Toast from '../../src/Toast';
import ToastHeader from '../../src/ToastHeader';
import ToastBody from '../../src/ToastBody';
import ToastContainer from '../../src/ToastContainer';
import Progress from '../../src/Progress';
import ProgressBar from '../../src/ProgressBar';

function App() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((state) => !state);

  return (
    <div>
      <Progress width="25" mt={2} ms={2}>
        <ProgressBar
          width="50"
          bgColor="secondary"
          rounded="pill"
          animated
          striped
        />
      </Progress>
    </div>
  );
}

export default App;
