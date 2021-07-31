import {connect} from 'react-redux';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import planCoordination from './planCoordination.jsx';
import connector from './connector';

import PlanCoordinationPurchasePlan from './components/planCoordinationPurchasePlan';
import PlanCoordinationSchedulePlan from './components/planCoordinationSchedulePlan';
import PlanCoordinationLotCoordination from './components/planCoordinationLotCoordination';

export default withRouter(connect(connector, null)(planCoordination({
    Switch,
    Route,
    Redirect,
    PlanCoordinationPurchasePlan,
    PlanCoordinationSchedulePlan,
    PlanCoordinationLotCoordination,
})));
