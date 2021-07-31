/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import sectorAgreement from '../sectorAgreement.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        history: {
            push: value => t.context.calls.push(['history.push', value])
        },
        match: {
            url: '/path/mrgBid/1',
            params: {
                id: '1'
            }
        }
    };
    t.context.component = sectorAgreement({
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
    onOpenBid работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onOpenBid: id => t.context.calls.push(['onOpenBid', id]),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onOpenBid(1);
    t.deepEqual(t.context.calls, [
        ['onOpenBid', 1],
    ]);
    
    t.assert(node.onOpenBid);    
    node.onOpenBid(2);

    t.deepEqual(t.context.calls, [
        ['onOpenBid', 1],
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

Test(`
    onOpenDetailObject работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onOpenDetailObject: id => t.context.calls.push(['onOpenDetailObject', id]),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onOpenDetailObject(1);
    t.deepEqual(t.context.calls, [
        ['onOpenDetailObject', 1],
    ]);
    
    t.assert(node.onOpenDetailObject);    
    node.onOpenDetailObject(2);

    t.deepEqual(t.context.calls, [
        ['onOpenDetailObject', 1],
        ['window.open', '/index.html#/schedule/detail-objects/2']
    ]);
});