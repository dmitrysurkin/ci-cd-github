import Common from 'Api/common';
import FetchContext from './fetchContext';
import {SetYear} from './setYear';
import {SetIsLoading} from './setIsLoading';
import {Error} from '@dots-java/adapters/native/alertWidget';

export const UpdateYear = ({
    Update,
    FetchContext,
    Set,
    SetIsLoading,
    Error
}) => year => async dispatch => {
    try {
        dispatch(SetIsLoading(true));

        dispatch(Set(year));
        await Update(year);

        dispatch(FetchContext());
    } catch {
        Error('При выборе года произошла ошибка');
    } finally {
        dispatch(SetIsLoading(false));
    }
};

export default UpdateYear({
    Update: Common.SetCurrentYear,
    FetchContext,
    Set: SetYear,
    SetIsLoading,
    Error
});
