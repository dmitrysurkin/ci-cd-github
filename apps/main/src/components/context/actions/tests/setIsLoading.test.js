/* eslint-disable id-length*/
import Test from 'ava';
import {SET_IS_LOADING, SetIsLoading, MutateIsLoading} from '../setIsLoading';

Test(`
    Создается экшн с типом SET_IS_LOADING и значением
`, t => {
    const value = Symbol();
    t.deepEqual(SetIsLoading(value), {
        type: SET_IS_LOADING,
        payload: value
    });
});

Test(`
    Значение записывается в стейт
`, t => {
    t.plan(1);
    const value = Symbol();

    t.deepEqual(MutateIsLoading({}, value), {
        isLoading: value
    });
});
