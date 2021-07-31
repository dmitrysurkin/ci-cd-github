/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Monitoring from '../monitoring.jsx';
import style from '../style';

Test.beforeEach(t => {
    t.context.props = {
        classes: Object.assign(...Object.keys(style).map(className => ({[className]: `${className}`}))), 
        points: 1
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Monitoring {...t.context.props} />).toJSON());
});

Test(`
    Отображать 0
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        points: null,
    };

    t.snapshot(Render.create(<Monitoring {...props} />).toJSON());
});
