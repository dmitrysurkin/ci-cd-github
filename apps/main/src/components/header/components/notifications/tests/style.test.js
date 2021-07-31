/* eslint-disable id-length*/
import Test from 'ava';
import style from '../style.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(style);
});
