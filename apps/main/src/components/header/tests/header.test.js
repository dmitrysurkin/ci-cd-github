/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import header from '../header.jsx';

const Header = header({
    Header: ({children, ...rest}) => <header {...rest}>{children}</header>,
    Year: ({children, ...rest}) => <year {...rest}>{children}</year>,
    Customer: ({children, ...rest}) => <customer {...rest}>{children}</customer>,
    Applications: ({children, ...rest}) => <applications {...rest}>{children}</applications>,
    Monitoring: ({children, ...rest}) => <monitoring {...rest}>{children}</monitoring>,
    Notifications: ({children, ...rest}) => <notifications {...rest}>{children}</notifications>,
});

Test(`
    Отображение хэдера не изменилось
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Header/>).toJSON());
});
