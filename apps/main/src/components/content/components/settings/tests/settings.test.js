/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import settings from '../settings.jsx';

const Settings = settings({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    SettingsGeneral: rest => <settingsGeneral {...rest} />,
    Settings44fzRegistry: rest => <settings44fzRegistry {...rest} />,
    Settings223fz: rest => <settings223fz {...rest} />,
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
    t.snapshot(Render.create(<Settings {...t.context.props} />).toJSON());
});