import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import purchases from './purchases.jsx';

import PurchasesMeetingsRgGrbs from './components/purchasesMeetingsRgGrbs';
import PurchasesMeetingsRgGrbsRegistry from './components/purchasesMeetingsRgGrbsRegistry';
import PurchasesBids from './components/purchasesBids';
import PurchasesBidsRegistry from './components/purchasesBidsRegistry';
import PurchasesCorrectionRemarks from './components/purchasesCorrectionRemarks';
import PurchasesCorrectionRemarksRegistry from './components/purchasesCorrectionRemarksRegistry';

export default withRouter(purchases({
    Switch,
    Route,
    Redirect,
    PurchasesMeetingsRgGrbs,
    PurchasesMeetingsRgGrbsRegistry,
    PurchasesBids,
    PurchasesBidsRegistry,
    PurchasesCorrectionRemarks,
    PurchasesCorrectionRemarksRegistry,
}));
