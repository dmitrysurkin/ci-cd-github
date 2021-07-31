/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import withStyle from 'react-jss';
import Render from 'react-test-renderer';
import menu from '../menu.jsx';

const Menu = menu({
    useTransition: (...values) => {
        for (const value of values) {
            if ('function' === typeof value) {
                value();
            }
        }
        return [{item: 'item', key: 'key', props: 'props'}, {item: null, key: null, props: null}];
    },
    AnimatedDiv: ({children, ...rest}) => <animated {...rest}>{children}</animated>,
})({
    identities: {
        SEARCH: 'SEARCH',
        FOOTER: 'FOOTER',
    },
    animation: () => {}
});

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        classes: {
            container: 'container',
            menu: 'menu',
            options: 'options',
        }, 
        isOpen: true,
        isReversedY: false,
        toggle: () => t.context.calls.push(['toggle']),
        children: () => {}
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Menu {...t.context.props} />).toJSON());
});

Test(`
    children функция
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        children: () => {}
    };

    t.snapshot(Render.create(<Menu {...props} />).toJSON());
});

Test(`
    children не функция
`, t => {
    t.plan(1);

    const withIdentity = identity => component => {
        const decorated = component;

        decorated.compositeIdentity = identity;

        return decorated;
    };

    const Search = withIdentity('SEARCH')(withStyle({})(rest => <search {...rest} />));
    const Footer = withIdentity('FOOTER')(withStyle({})(rest => <footer {...rest} />));
    const Another = withIdentity('ANOTHER')(withStyle({})(rest => <another {...rest} />));

    t.snapshot(Render.create(
        <Menu {...t.context.props}>
            <Search />
            <Footer />
            <Another />
            {() => {}}
        </Menu>
    ).toJSON());
});