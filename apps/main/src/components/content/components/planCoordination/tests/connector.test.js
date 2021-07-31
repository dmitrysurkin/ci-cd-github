/* eslint-disable id-length*/
import Test from 'ava';
import connector from '../connector.js';

Test(`
    Подключает данные
`, t => {
    t.plan(1);

    const state = {
        context: {
            year: 'year'
        },
    };

    const expected = {
        year: 'year'
    };

    t.deepEqual(connector(state), expected);
});