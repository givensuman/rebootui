import { injectGlobal } from '@emotion/css';
// @ts-ignore
// No type definnitions
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

injectGlobal`${bootstrap}`;

export {};
