import {withRouter} from 'react-router-dom';
import sectorAgreementRegistry from './sectorAgreementRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/sectorAgreementRegistry.js');

export default withRouter(sectorAgreementRegistry({
    window
}));
