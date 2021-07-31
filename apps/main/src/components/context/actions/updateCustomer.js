import Common from 'Api/common';
import FetchContext from './fetchContext';
import {SetCustomerShortName} from './setCustomerShortName';
import {SetIsLoading} from './setIsLoading';
import {Error} from '@dots-java/adapters/native/alertWidget';

export const UpdateCustomer = ({
    Update,
    FetchContext,
    Set,
    SetIsLoading,
    Error
}) => ({id, customerShortName}) => async dispatch => {
    try {
        dispatch(SetIsLoading(true));

        dispatch(Set(customerShortName));
        await Update(id);

        dispatch(FetchContext());
    } catch {
        Error('При выборе организации произошла ошибка');
    } finally {
        dispatch(SetIsLoading(false));
    }
};

export default UpdateCustomer({
    Update: Common.SetCurrentCustomer,
    FetchContext,
    Set: SetCustomerShortName,
    SetIsLoading,
    Error
});