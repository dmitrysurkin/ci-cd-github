import {withRouter} from 'react-router-dom';
import bidsFirstLevelRegistry from './bidsFirstLevelRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/bidsFirstLevelRegistry.js');

export default withRouter(bidsFirstLevelRegistry({
    window: globalThis.window
}));
