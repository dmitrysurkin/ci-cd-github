/* eslint-disable id-length*/
import Test from 'ava';
import {SET_NOTIFICATIONS, SetNotifications, MutateNotifications} from '../setNotifications';

Test(`
    Создается экшн с типом SET_NOTIFICATIONS и значением
`, t => {
    const value = Symbol();
    t.deepEqual(SetNotifications(value), {
        type: SET_NOTIFICATIONS,
        payload: value
    });
});

Test(`
    Значение записывается в стейт
`, t => {
    const value = Symbol();

    t.deepEqual(MutateNotifications({}, value), {
        notifications: value
    });
});
