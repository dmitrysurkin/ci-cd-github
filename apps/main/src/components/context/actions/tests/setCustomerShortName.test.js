/* eslint-disable id-length*/
import Test from 'ava';
import {SET_CUSTOMER_SHORT_NAME, SetCustomerShortName, MutateCustomerShortName} from '../setCustomerShortName';

Test(`
    Создается экшн с типом SET_CUSTOMER_SHORT_NAME и значением
`, t => {
    const value = Symbol();
    t.deepEqual(SetCustomerShortName(value), {
        type: SET_CUSTOMER_SHORT_NAME,
        payload: value
    });
});

Test(`
    Значение записывается в стейт
`, t => {
    const value = Symbol();

    t.deepEqual(MutateCustomerShortName({}, value), {
        customerShortName: value
    });
});
