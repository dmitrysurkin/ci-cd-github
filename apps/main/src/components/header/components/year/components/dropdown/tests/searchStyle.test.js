/* eslint-disable id-length*/
import Test from 'ava';
import searchStyle from '../searchStyle.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(searchStyle);
});
