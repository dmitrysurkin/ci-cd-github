import Context from 'Api/context';
import FetchNotifications from './fetchNotifications';
import {SetContext} from './setContext';

export const FetchContext = ({
    Fetch,
    Set,
}) => () => async dispatch => {
    try {
        const {data} = await Fetch();
        dispatch(Set(data));

        dispatch(FetchNotifications());
    } catch {
        //
    }
};

export default FetchContext({
    Fetch: Context.Fetch,
    Set: SetContext
});
