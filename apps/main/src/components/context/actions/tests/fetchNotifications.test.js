/* eslint-disable id-length*/
import Test from 'ava';
import {FetchNotifications} from '../fetchNotifications';

const RESPONSE = {
    data: 'data'
};

const FetchSuccess = dispatches => () => {
    dispatches.push(['fetchSuccess']);
    return Promise.resolve(RESPONSE);
};

const FetchFailed = dispatches => () => {
    dispatches.push(['fetchFailed']);
    return Promise.reject();
};

const Set = dispatches => data => dispatches.push(['set', data]);
const Error = dispatches => value => dispatches.push(['error', value]);

Test(`
    Запрос успешен
`, async t => {
    const dispatches = [];

    await FetchNotifications({
        Fetch: FetchSuccess(dispatches),
        Set: Set(dispatches),
        Error: Error(dispatches),
    })()(action => action);

    t.deepEqual(dispatches, [
        ['fetchSuccess'],
        ['set', RESPONSE.data],
    ]);
});

Test(`
    Запрос неуспешен
`, async t => {
    const dispatches = [];

    await FetchNotifications({
        Fetch: FetchFailed(dispatches),
        Set: Set(dispatches),
        Error: Error(dispatches),
    })()(action => action);

    t.deepEqual(dispatches, [
        ['fetchFailed'],
        ['error', 'При загрузке уведомлений произошла ошибка'],
    ]);
});
