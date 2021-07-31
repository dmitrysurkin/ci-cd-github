/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import withStyle from 'react-jss';
import Render from 'react-test-renderer';
import dropdown from '../dropdown.jsx';

const inject1 = {
    window: {
        addEventListener: (type, listener) => {
            setTimeout(() => {
                listener(type);
            }, 1);
        },
        removeEventListener: (type, listener) => {
            setTimeout(() => {
                listener(type);
            }, 1);
        },
    },
};

const inject2 = {
    identities: {
        VALUE: 'VALUE',
        MENU: 'MENU'
    },
    CamelCaseToKebab: () => {}
};

const withIdentity = identity => component => {
    const decorated = component;

    decorated.compositeIdentity = identity;

    return decorated;
};

const Dropdown = dropdown(inject1)(inject2);
const Value = withIdentity('VALUE')(withStyle({})(rest => <value {...rest} />));
const Menu = withIdentity('MENU')(withStyle({})(rest => <menu {...rest} />));
const Another = withIdentity('ANOTHER')(withStyle({})(rest => <another {...rest} />));

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        classes: {
            container: 'container',
            menu: 'menu',
            options: 'options',
        }, 
        maxHeight: 300,
        maxWidth: 300,
        error: null,
        disabled: false,
        immutable: false,
        color: 'color',
        children: 'children',
        onKeyDown: (evt, func) => {
            t.context.calls.push(['onKeyDown', evt]);
            func();
        },
    };
});

Test(`
    Дефолтное присвоение аргументов
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        onKeyDown: undefined,
        maxHeight: undefined,
    };

    t.snapshot(Render.create(
        <Dropdown {...props} disabled={true}>
            <Value />
        </Dropdown>
    ).toJSON());
});

Test(`
    element-id обрабатывается
`, t => {
    t.plan(2);   

    t.snapshot(Render.create(
        <Dropdown {...t.context.props} name='name'>
            <Value />
            <Menu />
        </Dropdown>
    ).toJSON());

    t.snapshot(Render.create(
        <Dropdown {...t.context.props} name={null}>
            <Value />
            <Menu />
        </Dropdown>
    ).toJSON());
});

Test(`
    element-state обрабатывается
`, t => {
    t.plan(2);  

    t.snapshot(Render.create(
        <Dropdown {...t.context.props} disabled={true}>
            <Value />
            <Menu />
        </Dropdown>
    ).toJSON());

    t.snapshot(Render.create(
        <Dropdown {...t.context.props} disabled={false}>
            <Value />
            <Menu />
        </Dropdown>
    ).toJSON());
});

Test(`
    Дефолтное присвоения в switch
`, t => {
    t.plan(1);  

    t.snapshot(Render.create(
        <Dropdown {...t.context.props}>
            <Another />
        </Dropdown>
    ).toJSON());
});

Test(`
    Ошибка обрабатывается
`, t => {
    t.plan(1);  

    t.snapshot(Render.create(
        <Dropdown {...t.context.props} error='error'>
            <Value />
            <Menu />
        </Dropdown>
    ).toJSON());
});

Test(`
    Обрабатывается состояние открытия / закрытия
`, async t => {
    t.plan(2);

    const component = Render.create(
        <Dropdown {...t.context.props}>
            <Value />
            <Menu />
        </Dropdown>
    );
    const main = component.root.findByProps({['data-test-id']: 'Селект'});
    const menu = main.findByProps({['data-test-id']: 'Меню'});
    await menu.props.toggle();

    t.snapshot(component.toJSON());

    const cloak = main.findByProps({['data-test-id']: 'Фон'});
    await cloak.props.onClick();

    t.snapshot(component.toJSON());
});