/* eslint-disable id-length*/
import Test from 'ava';
import valueStyle from '../valueStyle.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(valueStyle);
});

Test(`
    borderRadius изменяется
`, t => {
    t.plan(3);
    t.deepEqual(valueStyle.value.borderRadius({isOpen: true, isReversedY: true}), [[0, 0, 5, 5]]);
    t.deepEqual(valueStyle.value.borderRadius({isOpen: true, isReversedY: false}), [[5, 5, 0, 0]]);
    t.deepEqual(valueStyle.value.borderRadius({isOpen: false}), 5);
});

Test(`
    background изменяется
`, t => {
    t.plan(3);
    t.deepEqual(valueStyle.value.background({disabled: true}), '#F5F5F5');
    t.deepEqual(valueStyle.value.background({immutable: true}), '#F5F5F5');
    t.deepEqual(valueStyle.value.background({disabled: false, immutable: false}), '#FFFFFF');
});

Test(`
    cursor изменяется
`, t => {
    t.plan(3);
    t.deepEqual(valueStyle.value.cursor({disabled: true}), 'no-drop');
    t.deepEqual(valueStyle.value.cursor({immutable: true}), 'no-drop');
    t.deepEqual(valueStyle.value.cursor({disabled: false, immutable: false}), 'pointer');
});

Test(`
    boxShadow изменяется
`, t => {
    t.plan(2);
    t.deepEqual(valueStyle.value.boxShadow({isOpen: true}), [[0, 0, 7.7, 1.4, 'rgba(0, 0, 0, 0.05)']]);
    t.deepEqual(valueStyle.value.boxShadow({isOpen: false}), null);
});