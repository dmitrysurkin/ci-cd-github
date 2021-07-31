/* eslint-disable id-length*/
import Test from 'ava';
import {FetchContext} from '../fetchContext';

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

Test(`
    Запрос успешен
`, async t => {
    const dispatches = [];

    await FetchContext({
        Fetch: FetchSuccess(dispatches),
        Set: Set(dispatches),
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

    await FetchContext({
        Fetch: FetchFailed(dispatches),
        Set: Set(dispatches),
    })()(action => action);

    t.deepEqual(dispatches, [
        ['fetchFailed'],
    ]);
});
