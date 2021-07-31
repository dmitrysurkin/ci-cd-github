import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import nsiSettings from './nsi-settings.jsx';

import ExceptionRegistrySmp from './components/exceptionRegistrySmp';
import BuildingSubjectsSettings from './components/buildingSubjectsSettings';
import PrepaymentExcessSettings from './components/prepaymentExcessSettings';
import PurchaseAgreementSettings from './components/purchaseAgreementSettings';

export default withRouter(nsiSettings({
    Switch,
    Route,
    Redirect,
    ExceptionRegistrySmp,
    BuildingSubjectsSettings,
    PrepaymentExcessSettings,
    PurchaseAgreementSettings
}));
