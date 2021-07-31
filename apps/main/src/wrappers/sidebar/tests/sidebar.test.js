/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Sidebar from '../sidebar.jsx';

Test(`
    Верстка обертки вебкомпонента Sidebar не изменилась
`, t => {
    t.plan(4);

    const props = {
        someProp: 'string'
    };

    t.snapshot(Render.create(<Sidebar {...props}>content</Sidebar>).toJSON());
    const dispatches = [];
    const node = {};

    const button = Render.create(<Sidebar onSelect={() => dispatches.push('onSelect')} />, {createNodeMock: () => node});
    button.root.props.onSelect();

    t.deepEqual(dispatches, ['onSelect']);

    t.assert(node.onSelect);

    node.onSelect();

    t.deepEqual(dispatches, ['onSelect', 'onSelect']);
});