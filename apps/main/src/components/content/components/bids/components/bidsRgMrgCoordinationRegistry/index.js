import {withRouter} from 'react-router-dom';
import bidsRgMrgCoordinationRegistry from './bidsRgMrgCoordinationRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/bidsRgMrgCoordinationRegistry.js');

export default withRouter(bidsRgMrgCoordinationRegistry({
    window
}));
