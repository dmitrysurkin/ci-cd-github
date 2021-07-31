/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import settings223fz from '../settings223fz.jsx';

const Settings223fz = settings223fz({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    Settings223fzAgreement: rest => <settings223fzAgreement {...rest} />,
    Settings223fzCentralization: rest => <settings223fzCentralization {...rest} />,
});

Test.beforeEach(t => {
    t.context.props = {
        match: {
            path: 'path'
        }
    };
});

Test(`
    Роутинг не изменился
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Settings223fz {...t.context.props} />).toJSON());
});