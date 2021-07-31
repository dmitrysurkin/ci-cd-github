import {withRouter} from 'react-router-dom';
import contractCoordinationAgreedRegistry from './contractCoordinationAgreedRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/contractCoordinationAgreedRegistry.js');

export default withRouter(contractCoordinationAgreedRegistry({
    window
}));
