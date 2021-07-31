import {connect} from 'react-redux';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import content from './content.jsx';
import connector from './connector';

import {Loader} from '@dots-java/adapters/react/loader';

import Finance from './components/finance';
import PlanCoordination from './components/planCoordination';
import Purchases from './components/purchases';
import SectorAgreement from './components/sectorAgreement';
import ContractCoordination from './components/contractCoordination';
import Bids from './components/bids';
import Settings from './components/settings';

export default withRouter(connect(connector, null)(content({
    Switch,
    Route,
    Redirect,
    Loader,
    Finance,
    PlanCoordination,
    Purchases,
    SectorAgreement,
    ContractCoordination,
    Bids,
    Settings,
})));
