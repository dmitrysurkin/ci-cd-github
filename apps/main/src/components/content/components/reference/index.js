import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import reference from './reference.jsx';

import TradingPlatformsRegistry from './components/tradingPlatformsRegistry';
import InstitutionTypeRegistry from './components/InstitutionTypeRegistry';
import PeriodicitiesRegistry from './components/periodicitiesRegistry';
import AmortizationGroupRegistry from './components/amortizationGroupRegistry';
import ChangeReasonRegistry from './components/changeReasonRegistry';

import CustomerRatingRegistry from './components/customerRatingRegistry';
import DocumentRubricatorRegistry from './components/documentRubricatorRegistry';
import ReferenceDocumentRegistry from './components/referenceDocumentRegistry';
import ExternalResourceRegistry from './components/externalResourceRegistry';
import PositionRegistry from './components/positionRegistry';
import AisSiEaistFundRegistry from './components/aisSiEaistFundRegistry';
import Okpd2drugsRegistry from './components/okpd2drugsRegistry';
import GovernmentProgramRegistry from './components/governmentProgramRegistry';
import RejectReasonRegistry from './components/rejectReasonRegistry';
import LotAttributeRegistry from './components/lotAttributeRegistry';
import NormativSourceRegistry from './components/normativSourceRegistry';
import EslpRegistry from './components/eslpRegistry';
import AddressDictionaryRegistry from './components/addressDictionaryRegistry';
import NpaDocumentTypeReferenceRegistry from './components/npaDocumentTypeReferenceRegistry';
import TypicalDocumentationSettingRegistry from './components/typicalDocumentationSettingRegistry';
import UtilityTarifZoneRegistry from './components/utilityTarifZoneRegistry';
import TarifzoneRegistry from './components/tarifzoneRegistry';

export default withRouter(reference({
    Switch,
    Route,
    Redirect,
    TradingPlatformsRegistry,
    InstitutionTypeRegistry,
    PeriodicitiesRegistry,
    AmortizationGroupRegistry,
    ChangeReasonRegistry,
    CustomerRatingRegistry,
    DocumentRubricatorRegistry,
    ReferenceDocumentRegistry,
    ExternalResourceRegistry,
    PositionRegistry,
    AisSiEaistFundRegistry,
    Okpd2drugsRegistry,
    GovernmentProgramRegistry,
    RejectReasonRegistry,
    LotAttributeRegistry,
    NormativSourceRegistry,
    EslpRegistry,
    AddressDictionaryRegistry,
    NpaDocumentTypeReferenceRegistry,
    TypicalDocumentationSettingRegistry,
    UtilityTarifZoneRegistry,
    TarifzoneRegistry
}));
