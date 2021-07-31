import {withRouter} from 'react-router-dom';
import planCoordinationPurchasePlanCoordinatedRegistry from './planCoordinationPurchasePlanCoordinatedRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/planCoordinationPurchasePlanCoordinatedRegistry.js');

export default withRouter(planCoordinationPurchasePlanCoordinatedRegistry({
    window
}));
