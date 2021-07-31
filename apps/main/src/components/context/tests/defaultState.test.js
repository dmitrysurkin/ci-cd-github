/* eslint-disable id-length*/
import Test from 'ava';
import defaultState from '../defaultState';

Test(`
    Стартовое состояние стора не изменилось
`, t => {
    t.plan(1);
    t.snapshot(defaultState);
});
