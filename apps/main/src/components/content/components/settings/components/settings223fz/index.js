import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import settings223fz from './settings223fz.jsx';

import Settings223fzAgreement from './components/settings223fzAgreement';
import Settings223fzCentralizationRegistry from './components/settings223fzCentralizationRegistry';

export default withRouter(settings223fz({
    Switch,
    Route,
    Redirect,
    Settings223fzAgreement,
    Settings223fzCentralizationRegistry,
}));
