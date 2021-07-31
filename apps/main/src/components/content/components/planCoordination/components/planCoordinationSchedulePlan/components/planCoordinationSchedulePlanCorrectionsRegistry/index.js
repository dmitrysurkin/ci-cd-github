import {withRouter} from 'react-router-dom';
import planCoordinationSchedulePlanCorrectionsRegistry from './planCoordinationSchedulePlanCorrectionsRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/planCoordinationSchedulePlanCorrectionsRegistry.js');

export default withRouter(planCoordinationSchedulePlanCorrectionsRegistry({
    window
}));
