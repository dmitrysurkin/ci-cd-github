/* eslint-disable id-length*/
import Test from 'ava';
import optionStyle from '../optionStyle.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(optionStyle);
});
