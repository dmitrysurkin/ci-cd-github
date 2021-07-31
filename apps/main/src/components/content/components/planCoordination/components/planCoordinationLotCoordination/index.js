import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import lotCoordination from './planCoordinationLotCoordination.jsx';

import LotCoordinationCoordinationRegistry from './components/lotCoordinationCoordinationRegistry';
import LotCoordinationCorrectionsRegistry from './components/lotCoordinationCorrectionsRegistry';
import LotCoordinationCoordinatedRegistry from './components/lotCoordinationCoordinatedRegistry';
import LotCoordinationRejectedRegistry from './components/lotCoordinationRejectedRegistry';

export default withRouter(lotCoordination({
    Switch,
    Route,
    Redirect,
    LotCoordinationCoordinationRegistry,
    LotCoordinationCorrectionsRegistry,
    LotCoordinationCoordinatedRegistry,
    LotCoordinationRejectedRegistry,
}));
