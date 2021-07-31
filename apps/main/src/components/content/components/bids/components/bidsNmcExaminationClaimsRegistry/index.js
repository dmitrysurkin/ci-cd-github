import {withRouter} from 'react-router-dom';
import bidsNmcExaminationClaimsRegistry from './bidsNmcExaminationClaimsRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/bidsNmcExaminationClaimsRegistry.js');

export default withRouter(bidsNmcExaminationClaimsRegistry({
    window: globalThis.window
}));
