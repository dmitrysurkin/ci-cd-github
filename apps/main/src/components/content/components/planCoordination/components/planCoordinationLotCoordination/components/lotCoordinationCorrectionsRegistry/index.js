import {withRouter} from 'react-router-dom';
import lotCoordinationCorrectionsRegistry from './lotCoordinationCorrectionsRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/lotCoordinationCorrectionsRegistry.js');

export default withRouter(lotCoordinationCorrectionsRegistry({
    window
}));
