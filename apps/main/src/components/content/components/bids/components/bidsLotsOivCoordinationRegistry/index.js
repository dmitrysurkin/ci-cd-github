import {withRouter} from 'react-router-dom';
import bidsLotsOivCoordinationRegistry from './bidsLotsOivCoordinationRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/bidsLotsOivCoordinationRegistry.js');

export default withRouter(bidsLotsOivCoordinationRegistry({
    window: globalThis.window
}));
