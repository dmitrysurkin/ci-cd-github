import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import classifier from './classifier.jsx';

import KosguRegistry from './components/kosguRegistry';
import OkeiRegistry from './components/okeiRegistry';
import OkvedRegistry from './components/okvedRegistry';
import OkpdRegistry from './components/okpdRegistry';
import Okpd2Registry from './components/okpd2Registry';
import OkvRegistry from './components/okvRegistry';
import OkatoRegistry from './components/okatoRegistry';
import OkoguRegistry from './components/okoguRegistry';
import OkopfRegistry from './components/okopfRegistry';
import OktmoRegistry from './components/oktmoRegistry';
import OkfsRegistry from './components/okfsRegistry';
import OksmRegistry from './components/oksmRegistry';
import MerCodeRegistry from './components/merCodeRegistry';

export default withRouter(classifier({
    Switch,
    Route,
    Redirect,
    KosguRegistry,
    OkeiRegistry,
    OkvedRegistry,
    OkpdRegistry,
    Okpd2Registry,
    OkatoRegistry,
    OkopfRegistry,
    OkoguRegistry,
    OktmoRegistry,
    OkfsRegistry,
    OksmRegistry,
    OkvRegistry,
    MerCodeRegistry
}));
