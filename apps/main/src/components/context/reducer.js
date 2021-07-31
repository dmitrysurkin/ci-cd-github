import DefaultState from './defaultState';

import {SET_CONTEXT, MutateContext} from './actions/setContext';
import {SET_NOTIFICATIONS, MutateNotifications} from './actions/setNotifications';
import {SET_CUSTOMER_SHORT_NAME, MutateCustomerShortName} from './actions/setCustomerShortName';
import {SET_YEAR, MutateYear} from './actions/setYear';
import {SET_IS_LOADING, MutateIsLoading} from './actions/setIsLoading';

export default function Reducer(state = DefaultState, {type, payload}) {
    switch (type) {

        case SET_CONTEXT:
            return MutateContext(state, payload);

        case SET_NOTIFICATIONS:
            return MutateNotifications(state, payload);

        case SET_CUSTOMER_SHORT_NAME:
            return MutateCustomerShortName(state, payload);

        case SET_YEAR:
            return MutateYear(state, payload);

        case SET_IS_LOADING:
            return MutateIsLoading(state, payload);        

        default:
            return state;
    }
}
