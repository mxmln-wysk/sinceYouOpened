/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";

import './index.scss';
import App from './App';
import {TimeProvider} from "./context";
import { LangProvider } from './langContext';

render(() => (
        <Router>
            <TimeProvider>
                <LangProvider>
                    <App/>
                </LangProvider>
            </TimeProvider>
        </Router>
    ),
    document.getElementById('root')!);
