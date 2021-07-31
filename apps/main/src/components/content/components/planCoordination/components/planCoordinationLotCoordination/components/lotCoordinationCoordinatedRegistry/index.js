import {withRouter} from 'react-router-dom';
import lotCoordinationCoordinatedRegistry from './lotCoordinationCoordinatedRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/lotCoordinationCoordinatedRegistry.js');

export default withRouter(lotCoordinationCoordinatedRegistry({
    window
}));
