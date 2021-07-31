/* eslint-disable id-length*/
import Test from 'ava';
import style from '../style.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(style);
});

Test(`
    Изменять цвет
`, t => {
    t.plan(5);

    t.deepEqual(style.points.background({}), '#80DD7E');
    t.deepEqual(style.points.background({points: 0}), '#80DD7E');
    t.deepEqual(style.points.background({points: 3}), '#F8CA4E');
    t.deepEqual(style.points.background({points: 6}), '#FF6666');
    t.deepEqual(style.points.background({points: 9}), '#D90000');
});

