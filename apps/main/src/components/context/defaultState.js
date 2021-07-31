import Moment from 'moment';

const STARTING_YEAR = 2015;

export default {
    lastCustomer: null,
    customerShortName: null,
    notifications: 0,
    year: null,
    years: new Array((Moment().year() - STARTING_YEAR) + 10)
        .fill(STARTING_YEAR)
        .map((year, index) => year + index)
};
