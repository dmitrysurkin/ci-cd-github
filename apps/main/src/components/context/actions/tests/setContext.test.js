/* eslint-disable id-length*/
import Test from 'ava';
import {SET_CONTEXT, SetContext, MutateContext} from '../setContext';

Test(`
    Создается экшн с типом SET_CONTEXT и значением
`, t => {
    const value = Symbol();
    t.deepEqual(SetContext(value), {
        type: SET_CONTEXT,
        payload: value
    });
});

Test(`
    Значение записывается в стейт
`, t => {

    t.deepEqual(MutateContext({}, {
        lastCustomer: 'lastCustomer',
        year: 'year',
        customerShortName: 'customerShortName',
    }), {
        lastCustomer: 'lastCustomer',
        year: 'year',
        customerShortName: 'customerShortName',
    });
});
