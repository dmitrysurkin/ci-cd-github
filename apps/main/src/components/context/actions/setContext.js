import Update from 'immutability-helper';

export const SET_CONTEXT = Symbol();

export const SetContext = data => ({
    type: SET_CONTEXT,
    payload: data
});

export const MutateContext = (state, {
    lastCustomer,
    year,
    customerShortName,
}) => Update(state, {
    lastCustomer: {$set: lastCustomer},
    year: {$set: year},
    customerShortName: {$set: customerShortName},
});
