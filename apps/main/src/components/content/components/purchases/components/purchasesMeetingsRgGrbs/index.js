import {withRouter} from 'react-router-dom';
import purchasesMeetingsRgGrbs from './purchasesMeetingsRgGrbs.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/purchasesMeetingsRgGrbs.js');

export default withRouter(purchasesMeetingsRgGrbs);
