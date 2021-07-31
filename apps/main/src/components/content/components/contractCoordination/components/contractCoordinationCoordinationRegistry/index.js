import {withRouter} from 'react-router-dom';
import contractCoordinationCoordinationRegistry from './contractCoordinationCoordinationRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/contractCoordinationCoordinationRegistry.js');

export default withRouter(contractCoordinationCoordinationRegistry({
    window
}));
