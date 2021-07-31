/* eslint-disable id-length*/
import Test from 'ava';
import menuStyle from '../menuStyle.js';

Test(`
    Стили не изменились
`, t => {
    t.plan(1);
    t.snapshot(menuStyle);
});

Test(`
    width изменяется
`, t => {
    t.plan(2);
    t.deepEqual(menuStyle.container.width({maxWidth: 100}), 100);
    t.deepEqual(menuStyle.container.width({maxWidth: undefined}), 'calc(100% + 10px)');
});

Test(`
    transform изменяется
`, t => {
    t.plan(2);
    t.deepEqual(menuStyle.container.transform({isReversedX: true, isReversedY: true}), [['translateX(5px)', 'translateY(-100%)']]);
    t.deepEqual(menuStyle.container.transform({isReversedX: false, isReversedY: false}), [['translateX(-5px)', '']]);
});

Test(`
    top изменяется
`, t => {
    t.plan(2);
    t.deepEqual(menuStyle.container.top({isReversedY: true}), 0);
    t.deepEqual(menuStyle.container.top({isReversedY: false}), null);
});

Test(`
    right изменяется
`, t => {
    t.plan(2);
    t.deepEqual(menuStyle.container.right({isReversedX: true}), 0);
    t.deepEqual(menuStyle.container.right({isReversedX: false}), null);
});

Test(`
    borderRadius изменяется
`, t => {
    t.plan(2);
    t.deepEqual(menuStyle.menu.borderRadius({isReversedY: true}), [[5, 5, 0, 0]]);
    t.deepEqual(menuStyle.menu.borderRadius({isReversedY: false}), [[0, 0, 5, 5]]);
});

Test(`
    maxHeight изменяется
`, t => {
    t.plan(1);
    t.deepEqual(menuStyle.menu.maxHeight({maxHeight: 100}), 100);
});

Test(`
    marginTop изменяется
`, t => {
    t.plan(2);
    t.deepEqual(menuStyle.menu.marginTop({isReversedY: true}), 5);
    t.deepEqual(menuStyle.menu.marginTop({isReversedY: false}), 0);
});

Test(`
    marginBottom изменяется
`, t => {
    t.plan(2);
    t.deepEqual(menuStyle.menu.marginBottom({isReversedY: true}), 0);
    t.deepEqual(menuStyle.menu.marginBottom({isReversedY: false}), 5);
});

Test(`
    top изменяется в menu
`, t => {
    t.plan(2);
    t.deepEqual(menuStyle.menu.top({isReversedY: true}), 0);
    t.deepEqual(menuStyle.menu.top({isReversedY: false}), null);
});