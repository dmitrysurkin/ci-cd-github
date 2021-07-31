import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import bids from './bids.jsx';

import BidsRgMrgCoordination from './components/bidsRgMrgCoordination';
import BidsRgMrgCoordinationRegistry from './components/bidsRgMrgCoordinationRegistry';
import BidsNmcExaminationClaimsRegistry from './components/bidsNmcExaminationClaimsRegistry';
import BidsLotsOivCoordination from './components/bidsLotsOivCoordination';
import BidsLotsOivCoordinationRegistry from './components/bidsLotsOivCoordinationRegistry';
import BidsFirstLevelRegistry from './components/bidsFirstLevelRegistry';
import BidsSecondLevelRegistry from './components/bidsSecondLevelRegistry';

export default withRouter(bids({
    Switch,
    Route,
    Redirect,
    BidsRgMrgCoordination,
    BidsRgMrgCoordinationRegistry,
    BidsNmcExaminationClaimsRegistry,
    BidsLotsOivCoordination,
    BidsLotsOivCoordinationRegistry,
    BidsFirstLevelRegistry,
    BidsSecondLevelRegistry,
}));
