/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import bidsLotsOivCoordination from '../bidsLotsOivCoordination.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        history: {
            push: value => t.context.calls.push(['history.push', value])
        },
        match: {
            url: '/path/mrgBid/id',
            params: {
                id: 'id'
            }
        }
    };
    t.context.component = bidsLotsOivCoordination({
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
    onClose работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onClose: () => t.context.calls.push(['onClose']),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onClose();
    t.deepEqual(t.context.calls, [
        ['onClose'],
    ]);
    
    t.assert(node.onClose);    
    node.onClose();

    t.deepEqual(t.context.calls, [
        ['onClose'],
        ['history.push', '/path/']
    ]);
});

Test(`
    onOpenLot работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onOpenLot: id => t.context.calls.push(['onOpenLot', id]),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onOpenLot(1);
    t.deepEqual(t.context.calls, [
        ['onOpenLot', 1],
    ]);
    
    t.assert(node.onOpenLot);    
    node.onOpenLot(2);

    t.deepEqual(t.context.calls, [
        ['onOpenLot', 1],
        ['window.open', '/index.html#/schedule/lots/2']
    ]);
});

Test(`
    onOpenPrevBid работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onOpenPrevBid: id => t.context.calls.push(['onOpenPrevBid', id]),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onOpenPrevBid(1);
    t.deepEqual(t.context.calls, [
        ['onOpenPrevBid', 1],
    ]);
    
    t.assert(node.onOpenPrevBid);    
    node.onOpenPrevBid(2);

    t.deepEqual(t.context.calls, [
        ['onOpenPrevBid', 1],
        ['window.open', '/arm-mrg.html#/mrg-bid/2']
    ]);
});

Test(`
    onOpenProcedure работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onOpenProcedure: id => t.context.calls.push(['onOpenProcedure', id]),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onOpenProcedure(1);
    t.deepEqual(t.context.calls, [
        ['onOpenProcedure', 1],
    ]);
    
    t.assert(node.onOpenProcedure);    
    node.onOpenProcedure(2);

    t.deepEqual(t.context.calls, [
        ['onOpenProcedure', 1],
        ['window.open', '/index.html#/definition-supplier/preparation-publication/2']
    ]);
});