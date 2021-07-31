/* eslint-disable id-length*/
import Test from 'ava';
import compositeIdentity from '../compositeIdentity.js';

Test(`
    Добавляется новое свойство
`, t => {
    t.plan(1);
    
    const identity = 'identity';
    const component = {};
    t.deepEqual(identity, compositeIdentity(identity)(component).compositeIdentity);
});