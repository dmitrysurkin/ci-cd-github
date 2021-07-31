import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import innovativeProductions from './innovativeProductions.jsx';

import InnovativeSpgzRegistry from './components/innovativeSpgzRegistry';
import InnovativeGroupRegistry from './components/innovativeGroupRegistry';

export default withRouter(innovativeProductions({
    Switch,
    Route,
    Redirect,
    InnovativeSpgzRegistry,
    InnovativeGroupRegistry
}));