import Common from 'Api/common';
import {SetNotifications} from './setNotifications';
import {Error} from '@dots-java/adapters/native/alertWidget';

export const FetchNotifications = ({
    Fetch,
    Set,
    Error
}) => () => async dispatch => {
    try {
        const {data} = await Fetch();
        dispatch(Set(data));
    } catch {
        Error('При загрузке уведомлений произошла ошибка');
    }
};

export default FetchNotifications({
    Fetch: Common.NewCount,
    Set: SetNotifications,
    Error
});
