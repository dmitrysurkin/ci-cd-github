/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import customer from '../customer.jsx';
import style from '../style';

const Customer = customer({
    Glyph: ({children, ...rest}) => <glyph {...rest}>{children}</glyph>,
    CustomerSelection: () => Promise.resolve({id: 'id', shortName: 'shortName'}),
});

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        classes: Object.assign(...Object.keys(style).map(className => ({[className]: `${className}`}))), 
        customerId: 'customerId',
        value: 'value',
        onSelect: value => t.context.calls.push(['onSelect', value]),
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Customer {...t.context.props} />).toJSON());
});

Test(`
    Вызывается функция по добавлению заказчика
`, async t => {
    t.plan(1);

    const component = Render.create(<Customer {...t.context.props} />);
    const main = component.root.findByProps({['data-test-id']: 'Выбрать заказчика'});

    await main.props.onClick();

    t.deepEqual(t.context.calls, [
        ['onSelect', {id: 'id', customerShortName: 'shortName'}],
    ]);
});