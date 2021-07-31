/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import bidsSecondLevelRegistry from '../bidsSecondLevelRegistry.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        match: {
            path: '/path/'
        }
    };
    t.context.component = bidsSecondLevelRegistry({
        window: {
            open: value => t.context.calls.push(['window.open', value])
        }
    });
});

Test(`
    Верстка обертки вебкомпонента не изменилась
`, t => {
    t.plan(1);
    const Component = t.context.component;
    t.snapshot(Render.create(<Component {...t.context.props} />).toJSON());
});

Test(`
    onOpen работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onOpen: id => t.context.calls.push(['onOpen', id]),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onOpen(1);
    t.deepEqual(t.context.calls, [
        ['onOpen', 1],
    ]);
    
    t.assert(node.onOpen);    
    node.onOpen(2);

    t.deepEqual(t.context.calls, [
        ['onOpen', 1],
        ['window.open', '/path/2']
    ]);
});