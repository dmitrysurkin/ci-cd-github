/* eslint-disable id-length*/
import Test from 'ava';
import {Dispatcher} from '../dispatcher.js';

Test(`
    Dispatcher подключает все actions компонента
`, t => {
    t.plan(4);

    const UpdateYear = () => () => true;
    const UpdateCustomer = () => () => true;
    const dispatch = action => action();

    const {
        updateYear,
        updateCustomer,
    } = Dispatcher({
        UpdateYear,
        UpdateCustomer,
    })(dispatch);

    t.assert(updateYear);
    t.assert(updateCustomer);
    
    t.is(updateYear(), UpdateYear()());
    t.is(updateCustomer(), UpdateCustomer()());
});
