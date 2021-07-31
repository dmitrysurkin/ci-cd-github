import {withRouter} from 'react-router-dom';
import sectorAgreement from './sectorAgreement.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/sectorAgreement.js');

export default withRouter(sectorAgreement({
    window
}));
