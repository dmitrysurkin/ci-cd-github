import {withRouter} from 'react-router-dom';
import planCoordinationSchedulePlanCoordinationRegistry from './planCoordinationSchedulePlanCoordinationRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/planCoordinationSchedulePlanCoordinationRegistry.js');

export default withRouter(planCoordinationSchedulePlanCoordinationRegistry({
    window
}));
