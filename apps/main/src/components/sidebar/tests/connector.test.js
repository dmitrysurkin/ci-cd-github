/* eslint-disable id-length*/
import Test from 'ava';
import connector from '../connector.js';

Test(`
    Подключает данные
`, t => {
    t.plan(1);

    const state = {
        context: {
            year: 2019
        },
    };

    const expected = {
        year: 2019
    };

    t.deepEqual(connector(state), expected);
});