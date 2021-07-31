import {withRouter} from 'react-router-dom';
import contractCoordinationAdditionalAgreementsRegistry from './contractCoordinationAdditionalAgreementsRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/contractCoordinationAdditionalAgreementsRegistry.js');

export default withRouter(contractCoordinationAdditionalAgreementsRegistry({
    window
}));
