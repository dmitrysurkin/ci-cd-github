/* eslint-disable id-length*/
import Test from 'ava';
import footerStyle from '../footerStyle.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(footerStyle);
});
