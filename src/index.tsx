/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";

import './index.scss';
import App from './App';
import {TimeProvider} from "./context";

render(() => (
        <Router>
            <TimeProvider>
                <App/>
            </TimeProvider>
        </Router>
    ),
    document.getElementById('root')!);
