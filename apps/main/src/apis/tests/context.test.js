/* eslint-disable id-length*/
import Test from 'ava';
import * as Apis from '../context';

const request = {
    get: (...args) => ['get', ...args],
    post: (...args) => ['post', ...args],
    put: (...args) => ['put', ...args],
    delete: (...args) => ['delete', ...args]
};

Test.before(t => {
    //eslint-disable-next-line no-unused-vars
    const {default: defaultApi, ...rest} = Apis;
    t.context.apis = rest;
});

Test(`
    Должны быть доступны методы Апи
`, t => {
    const apiKeys = Object.keys(t.context.apis);
    apiKeys.forEach(key => t.assert(Apis.default[key]));
});

Test(`
    Апи методов не изменилось
`, t => {
    const apis = Object.values(t.context.apis);
    t.plan(apis.length);

    apis.forEach(fn => {
        const argsCount = fn.length;
        const args = Array.from({length: argsCount}, () => 'someData');
        t.snapshot(fn(request)(...args));
    });
});
