import Axios from 'axios';

export const Fetch = request => () => request.get('/api/eaistContext');

export default {
    Fetch: Fetch(Axios),
};
