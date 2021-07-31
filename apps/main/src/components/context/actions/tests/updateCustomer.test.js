/* eslint-disable id-length*/
import Test from 'ava';
import {UpdateCustomer} from '../updateCustomer';

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
    const id = 'id';
    const customerShortName = 'customerShortName';

    await UpdateCustomer({
        Update: UpdateSuccess(dispatches),
        FetchContext: FetchContext(dispatches),
        Set: Set(dispatches),
        SetIsLoading: SetIsLoading(dispatches),
        Error: Error(dispatches),
    })({id, customerShortName})(action => action);

    t.deepEqual(dispatches, [
        ['setIsLoading', true],
        ['set', customerShortName],
        ['updateSuccess', id],
        ['fetchContext'],
        ['setIsLoading', false],
    ]);
});

Test(`
    Запрос не успешен
`, async t => {
    const dispatches = [];
    const id = 'id';
    const customerShortName = 'customerShortName';

    await UpdateCustomer({
        Update: UpdateFailed(dispatches),
        FetchContext: FetchContext(dispatches),
        Set: Set(dispatches),
        SetIsLoading: SetIsLoading(dispatches),
        Error: Error(dispatches),
    })({id, customerShortName})(action => action);

    t.deepEqual(dispatches, [
        ['setIsLoading', true],
        ['set', customerShortName],
        ['updateFailed', id],
        ['error', 'При выборе организации произошла ошибка'],
        ['setIsLoading', false],
    ]);
});