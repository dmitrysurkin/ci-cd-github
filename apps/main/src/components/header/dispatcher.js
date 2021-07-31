import UpdateYear from 'Component/context/actions/updateYear';
import UpdateCustomer from 'Component/context/actions/updateCustomer';

export const Dispatcher = ({
    UpdateYear,
    UpdateCustomer,
}) => dispatch => ({
    updateYear: year => dispatch(UpdateYear(year)),
    updateCustomer: value => dispatch(UpdateCustomer(value)),
});

export default Dispatcher({
    UpdateYear,
    UpdateCustomer,
});
