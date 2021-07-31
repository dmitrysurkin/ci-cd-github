/* eslint-disable id-length*/
import Test from 'ava';
import style from '../valueStyle.js';

Test.beforeEach(t => {
    t.context.transition = {
        fast: 'fast'
    };
});

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(style({transition: t.context.transition}));
});

Test(`
    background изменяется
`, t => {
    t.plan(2);
    const styles = style({transition: t.context.transition});
    t.deepEqual(styles.value.background({isOpen: true}), '#FFFFFF');
    t.deepEqual(styles.value.background({isOpen: false}), 'transparent');
});

Test(`
    color изменяется
`, t => {
    t.plan(2);
    const styles = style({transition: t.context.transition});
    t.deepEqual(styles.value.color({isOpen: true}), 'inherit');
    t.deepEqual(styles.value.color({isOpen: false}), '#FFFFFF');
});

Test(`
    boxShadow изменяется
`, t => {
    t.plan(3);
    const styles = style({transition: t.context.transition});
    t.deepEqual(styles.value.boxShadow({isOpen: true, isReversedY: true}), '-1px -1px 5px #E6E6E6');
    t.deepEqual(styles.value.boxShadow({isOpen: true, isReversedY: false}), '1px 4px 5px #E6E6E6');
    t.deepEqual(styles.value.boxShadow({isOpen: false}), null);
});