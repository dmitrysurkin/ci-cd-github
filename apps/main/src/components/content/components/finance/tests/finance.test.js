/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import finance from '../finance.jsx';

const Finance = finance({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    FinanceLimitProject: rest => <financeLimitProject {...rest} />,
    FinanceLimitProjectRegistry: rest => <financeLimitProjectRegistry {...rest} />
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
    t.snapshot(Render.create(<Finance {...t.context.props} />).toJSON());
});