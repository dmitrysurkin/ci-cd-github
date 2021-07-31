import {withRouter} from 'react-router-dom';
import planCoordinationSchedulePlanCoordinatedRegistry from './planCoordinationSchedulePlanCoordinatedRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/planCoordinationSchedulePlanCoordinatedRegistry.js');

export default withRouter(planCoordinationSchedulePlanCoordinatedRegistry({
    window
}));
