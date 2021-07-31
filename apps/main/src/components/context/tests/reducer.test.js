/* eslint-disable id-length*/
import Test from 'ava';
import Reducer from '../reducer';
import DefaultState from '../defaultState';

import {SetContext, MutateContext} from '../actions/setContext';
import {SetNotifications, MutateNotifications} from '../actions/setNotifications';
import {SetCustomerShortName, MutateCustomerShortName} from '../actions/setCustomerShortName';
import {SetYear, MutateYear} from '../actions/setYear';
import {SetIsLoading, MutateIsLoading} from '../actions/setIsLoading';

Test(`
    Экшн SetContext зарегистрирован
`, t => {
    const data = Symbol();
    t.deepEqual(Reducer({}, SetContext(data)), MutateContext({}, data));
});

Test(`
    Экшн SetNotifications зарегистрирован
`, t => {
    const data = Symbol();
    t.deepEqual(Reducer({}, SetNotifications(data)), MutateNotifications({}, data));
});

Test(`
    Экшн SetCustomerShortName зарегистрирован
`, t => {
    const data = Symbol();
    t.deepEqual(Reducer({}, SetCustomerShortName(data)), MutateCustomerShortName({}, data));
});

Test(`
    Экшн SetYear зарегистрирован
`, t => {
    const data = Symbol();
    t.deepEqual(Reducer({}, SetYear(data)), MutateYear({}, data));
});

Test(`
    Экшн SetIsLoading зарегистрирован
`, t => {
    const data = Symbol();
    t.deepEqual(Reducer({}, SetIsLoading(data)), MutateIsLoading({}, data));
});

Test(`
    Инициализация из defaultState
`, t => {
    t.plan(1);
    t.deepEqual(Reducer(undefined, {}), DefaultState);
});

Test(`
    Фоллбек в текущий стейт
`, t => {
    t.plan(1);
    const state = Symbol('state');
    t.is(Reducer(state, {}), state);
});
