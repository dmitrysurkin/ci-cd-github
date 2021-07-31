/* eslint-disable id-length*/
import Test from 'ava';
import style from '../buttonStyle.js';

Test.beforeEach(t => {
    t.context.button = {
        borderRadius: 'borderRadius',
        background: {
            control: 'control'
        }
    };
    t.context.transition = {
        fast: 'fast'
    };
});

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(style({button: t.context.button, transition: t.context.transition}));
});

Test(`
    background берёт своё значение из темы button
`, t => {
    t.plan(1);
    const styles = style({button: t.context.button, transition: t.context.transition});
    t.deepEqual(styles.button.background(), t.context.button.background.control);
});

Test(`
    opacity изменяется
`, t => {
    t.plan(2);
    const styles = style({button: t.context.button, transition: t.context.transition});
    t.deepEqual(styles.button.opacity({isOpen: true}), 0);
    t.deepEqual(styles.button.opacity({isOpen: false}), 1);
});