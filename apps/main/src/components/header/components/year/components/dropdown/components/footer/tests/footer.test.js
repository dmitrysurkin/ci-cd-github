/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Footer from '../footer.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        classes: {
            footer: 'footer'
        }, 
        children: 'children',
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Footer {...t.context.props} />).toJSON());
});