/* eslint-disable id-length*/
import Test from 'ava';
import menuAnimationStyle from '../menuAnimationStyle.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(menuAnimationStyle);
});

Test(`
    Анимация берёт своё значение из темы isReversedY = true
`, t => {
    t.plan(2);
    const styles = menuAnimationStyle({isReversedY: true});
    t.deepEqual(styles.from.transform, 'translate3d(0, 100%, 0)');
    t.deepEqual(styles.leave.transform, 'translate3d(0, 100%, 0)');
});

Test(`
    Анимация берёт своё значение из темы isReversedY = false
`, t => {
    t.plan(2);
    const styles = menuAnimationStyle({isReversedY: false});
    t.deepEqual(styles.from.transform, 'translate3d(0, -100%, 0)');
    t.deepEqual(styles.leave.transform, 'translate3d(0, -100%, 0)');
});