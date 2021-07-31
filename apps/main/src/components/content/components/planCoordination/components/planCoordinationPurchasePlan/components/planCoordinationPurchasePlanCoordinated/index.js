import {withRouter} from 'react-router-dom';
import planCoordinationPurchasePlanCoordinated from './planCoordinationPurchasePlanCoordinated.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/planCoordinationPurchasePlanCoordinated.js');

export default withRouter(planCoordinationPurchasePlanCoordinated({
    window
}));
