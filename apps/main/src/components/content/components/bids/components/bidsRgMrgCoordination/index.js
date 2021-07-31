import {withRouter} from 'react-router-dom';
import bidsRgMrgCoordination from './bidsRgMrgCoordination.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/bidsRgMrgCoordination.js');

export default withRouter(bidsRgMrgCoordination({
    window: globalThis.window
}));
