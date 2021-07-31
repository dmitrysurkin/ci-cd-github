import Fetch from './actions/fetchContext';

export const Dispatcher = ({
    Fetch,
}) => dispatch => ({
    fetch: () => dispatch(Fetch()),
});

export default Dispatcher({
    Fetch,
});
