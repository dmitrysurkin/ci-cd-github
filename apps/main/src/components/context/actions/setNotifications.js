import Update from 'immutability-helper';

export const SET_NOTIFICATIONS = Symbol();

export const SetNotifications = data => ({
    type: SET_NOTIFICATIONS,
    payload: data
});

export const MutateNotifications = (state, data) => Update(state, {
    notifications: {$set: data}
});
