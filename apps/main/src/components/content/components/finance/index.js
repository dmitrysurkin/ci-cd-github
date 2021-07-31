import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import finance from './finance.jsx';

import FinanceLimitProject from './components/financeLimitProject';
import FinanceLimitProjectRegistry from './components/financeLimitProjectRegistry';

export default withRouter(finance({
    Switch,
    Route,
    Redirect,
    FinanceLimitProject,
    FinanceLimitProjectRegistry,
}));
