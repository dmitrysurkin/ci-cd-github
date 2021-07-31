import {withRouter} from 'react-router-dom';
import purchasesMeetingsRgGrbsRegistry from './purchasesMeetingsRgGrbsRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/purchasesMeetingsRgGrbsRegistry.js');

export default withRouter(purchasesMeetingsRgGrbsRegistry);
