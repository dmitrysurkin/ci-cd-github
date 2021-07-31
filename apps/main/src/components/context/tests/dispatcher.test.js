/* eslint-disable id-length*/
import Test from 'ava';
import {Dispatcher} from '../dispatcher.js';

Test(`
    Dispatcher подключает все actions компонента
`, t => {
    t.plan(2);

    const Fetch = () => () => true;
    const dispatch = action => action();

    const {
        fetch,
    } = Dispatcher({
        Fetch,
    })(dispatch);

    t.assert(fetch);
    t.is(fetch(), Fetch()());
});
