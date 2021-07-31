import Jss from 'jss';
import DefaultUnits from 'jss-plugin-default-unit';
import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'react-jss';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './app.jsx';
import Store from './store';
import Theme from './themes/default';

Jss.use(DefaultUnits());

const app = document.getElementById('app');

ReactDOM.render((
    <ThemeProvider theme={Theme}>
        <Provider store={Store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
), app);
