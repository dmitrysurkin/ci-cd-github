import {withRouter} from 'react-router-dom';
import lotCoordinationRejectedRegistry from './lotCoordinationRejectedRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/lotCoordinationRejectedRegistry.js');

export default withRouter(lotCoordinationRejectedRegistry({
    window
}));
