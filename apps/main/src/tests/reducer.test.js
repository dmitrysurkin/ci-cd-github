/* eslint-disable id-length*/
import Test from 'ava';
import Reducer from '../reducer';

Test(`
    Инициализация
`, t => {
    t.plan(1);
    t.deepEqual(Reducer(undefined, {}), {});
});
Test(`
    Фоллбек в текущий стейт
`, t => {
    t.plan(1);
    const state = Symbol('state');
    t.is(Reducer(state, {}), state);
});
