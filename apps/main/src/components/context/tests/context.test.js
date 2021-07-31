/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Context from '../context.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        fetch: () => t.context.calls.push(['fetched']),
    };
});

Test(`
    Верстка не изменилась
`, t => {
    t.snapshot(Render.create(<Context {...t.context.props} />).toJSON());
});