import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import planCoordinationPuchasePlan from './planCoordinationPuchasePlan.jsx';

import PlanCoordinationPurchasePlanCoordinated from './components/planCoordinationPurchasePlanCoordinated';
import PlanCoordinationPurchasePlanCoordinatedRegistry from './components/planCoordinationPurchasePlanCoordinatedRegistry';

export default withRouter(planCoordinationPuchasePlan({
    Switch,
    Route,
    Redirect,
    PlanCoordinationPurchasePlanCoordinated,
    PlanCoordinationPurchasePlanCoordinatedRegistry,
}));
