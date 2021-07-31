import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import exceptionRegistrySmp from './exceptionRegistrySmp.jsx';

import Kpgz from './components/kpgz';
import Spgz from './components/spgz';
import Participant from './components/participant';

export default withRouter(exceptionRegistrySmp({
    Switch,
    Route,
    Redirect,
    Kpgz,
    Spgz,
    Participant
}));