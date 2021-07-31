/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Search from '../search.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        classes: {
            search: 'search'
        }, 
        children: 'children',
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Search {...t.context.props} />).toJSON());
});