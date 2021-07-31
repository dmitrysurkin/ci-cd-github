import {withRouter} from 'react-router-dom';
import purchasesCorrectionRemarks from './purchasesCorrectionRemarks.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/purchasesCorrectionRemarks.js');

export default withRouter(purchasesCorrectionRemarks);
