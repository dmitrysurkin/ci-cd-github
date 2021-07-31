/* eslint-disable id-length*/
import Test from 'ava';
import {UpdateYear} from '../updateYear';

const UpdateSuccess = dispatches => id => {
    dispatches.push(['updateSuccess', id]);
    return Promise.resolve();
};

const UpdateFailed = dispatches => id => {
    dispatches.push(['updateFailed', id]);
    return Promise.reject();
};

const Set = dispatches => data => dispatches.push(['set', data]);
const SetIsLoading = dispatches => value => dispatches.push(['setIsLoading', value]);
const FetchContext = dispatches => () => dispatches.push(['fetchContext']);
const Error = dispatches => value => dispatches.push(['error', value]);

Test(`
    Запрос успешен
`, async t => {
    const dispatches = [];
    const year = 'year';

    await UpdateYear({
        Update: UpdateSuccess(dispatches),
        FetchContext: FetchContext(dispatches),
        Set: Set(dispatches),
        SetIsLoading: SetIsLoading(dispatches),
        Error: Error(dispatches),
    })(year)(action => action);

    t.deepEqual(dispatches, [
        ['setIsLoading', true],
        ['set', year],
        ['updateSuccess', year],
        ['fetchContext'],
        ['setIsLoading', false],
    ]);
});

Test(`
    Запрос не успешен
`, async t => {
    const dispatches = [];
    const year = 'year';

    await UpdateYear({
        Update: UpdateFailed(dispatches),
        FetchContext: FetchContext(dispatches),
        Set: Set(dispatches),
        SetIsLoading: SetIsLoading(dispatches),
        Error: Error(dispatches),
    })(year)(action => action);

    t.deepEqual(dispatches, [
        ['setIsLoading', true],
        ['set', year],
        ['updateFailed', year],
        ['error', 'При выборе года произошла ошибка'],
        ['setIsLoading', false],
    ]);
});