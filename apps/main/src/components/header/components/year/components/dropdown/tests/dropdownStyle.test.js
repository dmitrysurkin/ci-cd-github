/* eslint-disable id-length*/
import Test from 'ava';
import dropdownStyle from '../dropdownStyle.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(dropdownStyle);
});
