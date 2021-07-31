import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import planCoordinationSchedulePlan from './planCoordinationSchedulePlan.jsx';

import PlanCoordinationSchedulePlan44fz from './components/planCoordinationSchedulePlan44fz';
import PlanCoordinationSchedulePlan223fz from './components/planCoordinationSchedulePlan223fz';
import PlanCoordinationSchedulePlanCoordinationRegistry from './components/planCoordinationSchedulePlanCoordinationRegistry';
import PlanCoordinationSchedulePlanCorrectionsRegistry from './components/planCoordinationSchedulePlanCorrectionsRegistry';
import PlanCoordinationSchedulePlanCoordinatedRegistry from './components/planCoordinationSchedulePlanCoordinatedRegistry';

export default withRouter(planCoordinationSchedulePlan({
    Switch,
    Route,
    Redirect,
    PlanCoordinationSchedulePlan44fz,
    PlanCoordinationSchedulePlan223fz,
    PlanCoordinationSchedulePlanCoordinationRegistry,
    PlanCoordinationSchedulePlanCorrectionsRegistry,
    PlanCoordinationSchedulePlanCoordinatedRegistry,
}));
