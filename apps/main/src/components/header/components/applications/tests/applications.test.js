/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import applications from '../applications.jsx';
import style from '../style';

const Applications = applications({
    Glyph: ({children, ...rest}) => <glyph {...rest}>{children}</glyph>,
    Link: ({children, ...rest}) => <link {...rest}>{children}</link>,
});

Test.beforeEach(t => {
    t.context.props = {
        classes: Object.assign(...Object.keys(style).map(className => ({[className]: `${className}`}))), 
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Applications {...t.context.props} />).toJSON());
});
