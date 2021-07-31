import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import content from './content.jsx';

import Reference from './components/reference';
import Classifier from './components/classifier';
import NsiSettings from './components/nsi-settings';
import ReferenceKpgzSpgz from './components/referenceKpgzSpgz';
import Participants from './components/participants';

export default withRouter(content({
    Switch,
    Route,
    Redirect,
    Reference,
    Classifier,
    NsiSettings,
    ReferenceKpgzSpgz,
    Participants
}));
