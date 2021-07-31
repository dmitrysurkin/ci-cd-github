/* eslint-disable id-length*/
import Test from 'ava';
import style from '../style.js';

Test(`
    Стили не изменились
`, test => {
    test.plan(1);
    test.snapshot(style);
});
