import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import settings from './settings.jsx';

import SettingsGeneral from './components/settingsGeneral';
import Settings44fzRegistry from './components/settings44fzRegistry';
import Settings223fz from './components/settings223fz';

export default withRouter(settings({
    Switch,
    Route,
    Redirect,
    SettingsGeneral,
    Settings44fzRegistry,
    Settings223fz,
}));
