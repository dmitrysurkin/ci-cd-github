import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import sectorAgreement from './sectorAgreement.jsx';

import SectorAgreement from './components/sectorAgreement';
import SectorAgreementRegistry from './components/sectorAgreementRegistry';

export default withRouter(sectorAgreement({
    Switch,
    Route,
    Redirect,
    SectorAgreement,
    SectorAgreementRegistry,
}));
