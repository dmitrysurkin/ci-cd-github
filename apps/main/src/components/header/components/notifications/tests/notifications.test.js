/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import notifications from '../notifications.jsx';
import style from '../style';

const Notifications = notifications({
    Glyph: ({children, ...rest}) => <glyph {...rest}>{children}</glyph>,
    Link: ({children, ...rest}) => <link {...rest}>{children}</link>,
});

Test.beforeEach(t => {
    t.context.props = {
        classes: Object.assign(...Object.keys(style).map(className => ({[className]: `${className}`}))), 
        count: 1,
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Notifications {...t.context.props} />).toJSON());
});

Test(`
    Отображать 0
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        count: undefined,
    };

    t.snapshot(Render.create(<Notifications {...props} />).toJSON());
});