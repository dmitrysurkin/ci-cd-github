/* eslint-disable id-length*/
import Test from 'ava';
import camelCaseToKebab from '../camelCaseToKebab.js';

Test(`
    Строка правильно форматируется
`, t => {
    t.plan(5);

    t.deepEqual('string', camelCaseToKebab('string'));
    t.deepEqual('string', camelCaseToKebab('STRING'));
    t.deepEqual('string1-string2', camelCaseToKebab('string1STRING2'));
    t.deepEqual('string1string2', camelCaseToKebab('STRING1string2'));
    t.throws(() => camelCaseToKebab(null));
});