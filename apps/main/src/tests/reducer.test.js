/* eslint-disable id-length*/
import Test from 'ava';
import reducer from '../reducer';

Test(`
    Стор должен содержать часть context
`, t => {
    t.plan(1);
    t.assert(reducer(undefined, {}).context);
});