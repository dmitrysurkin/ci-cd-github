/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Purchases from '../purchases.jsx';

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
    t.snapshot(Render.create(<Purchases />).toJSON());
});