/* eslint-disable id-length*/
import Test from 'ava';
import connector from '../connector.js';

Test(`
    Подключает данные
`, t => {
    t.plan(1);

    const state = {
        context: {
            lastCustomer: 'lastCustomer',
            customerShortName: 'customerShortName',
            year: 'year',
            years: 'years',
            notifications: 'notifications',
        },
    };

    const expected = {
        lastCustomer: 'lastCustomer',
        customerShortName: 'customerShortName',
        year: 'year',
        years: 'years',
        notifications: 'notifications',
    };

    t.deepEqual(connector(state), expected);
});