import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import reference from './referenceKpgzSpgz.jsx';

import Kpgz from './components/kpgz';
import Spgz from './components/spgz';
import KpgzRegistry from './components/kpgzRegistry';
import KtruConversion from './components/ktruConversion';
import Characteristic from './components/characteristic';
import Ktru from './components/ktru';
import Emiasconvertion from './components/emiasconvertion';
import EmiasconvertionRegistry from './components/emiasconvertionRegistry';
import InnovativeProductions from './components/innovativeProductions';
import SpgzNeedNormalized from './components/spgzNeedNormalized';
import NsiGoodsRegistry from './components/nsiGoodsRegistry';
import BannedKpgzRegistry from './components/bannedKpgzRegistry';
import CharacteristicRegistry from './components/characteristicRegistry';
import KtruRegistry from './components/ktruRegistry';


export default withRouter(reference({
    Switch,
    Route,
    Redirect,
    Kpgz,
    Spgz,
    KpgzRegistry,
    KtruConversion,
    Characteristic,
    Ktru,
    Emiasconvertion,
    EmiasconvertionRegistry,
    InnovativeProductions,
    SpgzNeedNormalized,
    NsiGoodsRegistry,
    BannedKpgzRegistry,
    CharacteristicRegistry,
    KtruRegistry
}));
