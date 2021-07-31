/* eslint-disable id-length*/
import Test from 'ava';
import style from '../style.js';

Test.beforeEach(t => {
    t.context.button = {
        borderRadius: 'borderRadius',
        background: {
            type: 'backgroundType',
            positive: 'backgroundPositive',
            neutral: 'backgroundNeutral',
        },
        color: {
            regular: 'regular'
        }
    };
    t.context.font = {
        size: {
            normal: 'normal'
        }
    };
});

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(style({button: t.context.button, font: t.context.font}));
});

Test(`
    border изменяется
`, t => {
    t.plan(3);
    const styles = style({button: t.context.button, font: t.context.font});
    t.deepEqual(styles.button.border({outline: true, type: 'type'}), [[1, 'solid', t.context.button.background.type]]);
    t.deepEqual(styles.button.border({outline: true, type: undefined}), [[1, 'solid', t.context.button.background.positive]]);
    t.deepEqual(styles.button.border({outline: false, type: undefined}), 0);
});

Test(`
    borderRadius берёт своё значение из темы button
`, t => {
    t.plan(1);
    const styles = style({button: t.context.button, font: t.context.font});
    t.deepEqual(styles.button.borderRadius, t.context.button.borderRadius);
});

Test(`
    fontSize берёт своё значение из темы font
`, t => {
    t.plan(1);
    const styles = style({button: t.context.button, font: t.context.font});
    t.deepEqual(styles.button.fontSize, t.context.font.size.normal);
});

Test(`
    padding изменяется
`, t => {
    t.plan(2);
    const styles = style({button: t.context.button, font: t.context.font});
    t.deepEqual(styles.button.padding({icon: true}), 4);
    t.deepEqual(styles.button.padding({icon: false}), [[4, 20]]);
});

Test(`
    color изменяется
`, t => {
    t.plan(6);
    const styles = style({button: t.context.button, font: t.context.font});
    t.deepEqual(styles.button.color({type: 'control'}), t.context.button.background.neutral);
    t.deepEqual(styles.button.color({type: 'type', outline: true}), t.context.button.background.type);
    t.deepEqual(styles.button.color({type: 'type', slick: true}), t.context.button.background.type);
    t.deepEqual(styles.button.color({type: undefined, outline: true}), t.context.button.background.positive);
    t.deepEqual(styles.button.color({type: undefined, slick: true}), t.context.button.background.positive);
    t.deepEqual(styles.button.color({type: null}), t.context.button.color.regular);
});

Test(`
    background изменяется
`, t => {
    t.plan(4);
    const styles = style({button: t.context.button, font: t.context.font});
    t.deepEqual(styles.button.background({outline: true}), '#FFFFFF');
    t.deepEqual(styles.button.background({slick: true}), 'transparent');
    t.deepEqual(styles.button.background({type: 'type'}), t.context.button.background.type);
    t.deepEqual(styles.button.background({}), t.context.button.background.positive);
});

Test(`
    opacity изменяется
`, t => {
    t.plan(3);
    const styles = style({button: t.context.button, font: t.context.font});
    t.deepEqual(styles.button.opacity({disabled: true}), 0.5);
    t.deepEqual(styles.button.opacity({pending: true}), 0.5);
    t.deepEqual(styles.button.opacity({}), 1);
});

Test(`
    opacity у ховера изменяется
`, t => {
    t.plan(3);
    const styles = style({button: t.context.button, font: t.context.font});
    t.deepEqual(styles.button['&:hover'].opacity({disabled: true}), 0.5);
    t.deepEqual(styles.button['&:hover'].opacity({pending: true}), 0.5);
    t.deepEqual(styles.button['&:hover'].opacity({}), 0.8);
});