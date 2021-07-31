import {withRouter} from 'react-router-dom';
import lotCoordinationCoordinationRegistry from './lotCoordinationCoordinationRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/lotCoordinationCoordinationRegistry.js');

export default withRouter(lotCoordinationCoordinationRegistry({
    window
}));
