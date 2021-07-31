import {withRouter} from 'react-router-dom';
import bidsSecondLevelRegistry from './bidsSecondLevelRegistry.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/bidsSecondLevelRegistry.js');

export default withRouter(bidsSecondLevelRegistry({
    window
}));
