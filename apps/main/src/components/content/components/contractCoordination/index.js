import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import contractCoordination from './contractCoordination.jsx';

import ContractCoordinationCoordinationRegistry from './components/contractCoordinationCoordinationRegistry';
import ContractCoordinationAdditionalAgreementsRegistry from './components/contractCoordinationAdditionalAgreementsRegistry';
import ContractCoordinationAgreedRegistry from './components/contractCoordinationAgreedRegistry';

export default withRouter(contractCoordination({
    Switch,
    Route,
    Redirect,
    ContractCoordinationCoordinationRegistry,
    ContractCoordinationAdditionalAgreementsRegistry,
    ContractCoordinationAgreedRegistry,
}));
