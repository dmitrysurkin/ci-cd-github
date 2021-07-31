import {withRouter} from 'react-router-dom';
import bidsLotsOivCoordination from './bidsLotsOivCoordination.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/bidsLotsOivCoordination.js');

export default withRouter(bidsLotsOivCoordination({
    window: globalThis.window
}));
