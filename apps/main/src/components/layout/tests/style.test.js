/* eslint-disable id-length*/
import Test from 'ava';
import style from '../styles';

Test(`
    Стили основного лейаута не изменились
`, t => {
    t.plan(1);
    t.snapshot(style);
});
