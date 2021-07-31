/* eslint-disable id-length*/
import Test from 'ava';
import placeholderStyle from '../placeholderStyle.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(placeholderStyle);
});
