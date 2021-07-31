/* eslint-disable id-length*/
import Test from 'ava';
import {SET_YEAR, SetYear, MutateYear} from '../setYear';

Test(`
    Создается экшн с типом SET_YEAR и значением
`, t => {
    const value = Symbol();
    t.deepEqual(SetYear(value), {
        type: SET_YEAR,
        payload: value
    });
});

Test(`
    Значение записывается в стейт
`, t => {
    const value = Symbol();

    t.deepEqual(MutateYear({}, value), {
        year: value
    });
});
