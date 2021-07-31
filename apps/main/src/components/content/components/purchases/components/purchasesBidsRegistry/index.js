import {withRouter} from 'react-router-dom';
import purchasesBidsRegistry from './purchasesBidsRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/purchasesBidsRegistry.js');

export default withRouter(purchasesBidsRegistry);
