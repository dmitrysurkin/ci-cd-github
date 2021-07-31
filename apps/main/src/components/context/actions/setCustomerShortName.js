import Update from 'immutability-helper';

export const SET_CUSTOMER_SHORT_NAME = Symbol();

export const SetCustomerShortName = data => ({
    type: SET_CUSTOMER_SHORT_NAME,
    payload: data
});

export const MutateCustomerShortName = (state, data) => Update(state, {
    customerShortName: {$set: data}
});
