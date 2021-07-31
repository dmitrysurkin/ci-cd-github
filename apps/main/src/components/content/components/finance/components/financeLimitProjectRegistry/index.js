import {withRouter} from 'react-router-dom';
import financeLimitProjectRegistry from './financeLimitProjectRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/financeLimitProjectRegistry.js');

export default withRouter(financeLimitProjectRegistry({
    window
}));
