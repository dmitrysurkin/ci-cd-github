/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Placeholder from '../placeholder.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        classes: {
            placeholder: 'placeholder'
        }, 
        children: 'children',
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Placeholder {...t.context.props} />).toJSON());
});