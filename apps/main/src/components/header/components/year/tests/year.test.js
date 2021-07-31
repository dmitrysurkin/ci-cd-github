/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import year from '../year.jsx';
import style from '../style';

const components = {
    Glyph: ({children, ...rest}) => <glyph {...rest}>{children}</glyph>,
    Button: ({children, ...rest}) => <button {...rest}>{children}</button>,
    Dropdown: {
        Dropdown: ({children, ...rest}) => <drowdown {...rest}>{children}</drowdown>,
        Value: ({children}, {isOpen = true}) => <context>{children({isOpen})}</context>,
        Menu: ({children, ...rest}) => <menu {...rest}>{children}</menu>,
        Option: ({children, ...rest}) => <option {...rest}>{children}</option>,
    },
};

const Year = year(components);

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        classes: Object.assign(...Object.keys(style).map(className => ({[className]: `${className}`}))), 
        value: 'item 1',
        options: ['item 1', 'item 2'],
        onSelect: value => t.context.calls.push(['onSelect', value]),
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Year {...t.context.props} />).toJSON());
});

Test(`
    Обрабатывается дефолтное состояние
`, t => {
    t.plan(1);
    const props = {
        ...t.context.props,
        options: undefined,
    };
    t.snapshot(Render.create(<Year {...props} />).toJSON());
});

Test(`
    Обрабатывается состояние открыт
`, t => {
    t.plan(1);
    const newComponents = {
        ...components,
        Dropdown: {
            ...components.Dropdown,
            Value: ({children}, {isOpen = true}) => <context>{children({isOpen})}</context>,
        }
    };
    const Year = year(newComponents);

    t.snapshot(Render.create(<Year {...t.context.props} />).toJSON());
});

Test(`
    Обрабатывается состояние закрыт
`, t => {
    t.plan(1);
    const newComponents = {
        ...components,
        Dropdown: {
            ...components.Dropdown,
            Value: ({children}, {isOpen = false}) => <context>{children({isOpen})}</context>,
        }
    };
    const Year = year(newComponents);

    t.snapshot(Render.create(<Year {...t.context.props} />).toJSON());
});

Test(`
    Вызывается функция для выбора года
`, t => {
    t.plan(1);

    const component = Render.create(<Year {...t.context.props} />);
    const main = component.root.findByProps({['data-test-id']: 'Выбрать год'});

    const option = main.findByProps({['data-test-id']: 'Строка номер 1'});
    option.props.onClick();

    t.deepEqual(t.context.calls, [
        ['onSelect', 'item 1'],
    ]);
});