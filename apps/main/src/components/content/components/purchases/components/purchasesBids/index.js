import {withRouter} from 'react-router-dom';
import purchasesBids from './purchasesBids.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/purchasesBids.js');

export default withRouter(purchasesBids);
