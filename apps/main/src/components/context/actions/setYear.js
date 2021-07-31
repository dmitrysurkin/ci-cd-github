import Update from 'immutability-helper';

export const SET_YEAR = Symbol();

export const SetYear = data => ({
    type: SET_YEAR,
    payload: data
});

export const MutateYear = (state, data) => Update(state, {
    year: {$set: data}
});
