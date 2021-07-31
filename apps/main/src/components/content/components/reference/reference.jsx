import React from 'react';

const Reference = ({
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
    TarifzoneRegistry,
}) => ({
    match: {path}
}) => (
    <Switch>
        <Route
            path={`${path}/tradingPlatform`}
            component={TradingPlatformsRegistry} />

        <Route
            path={`${path}/institutionType`}
            component={InstitutionTypeRegistry} />

        <Route
            path={`${path}/changeReason`}
            component={ChangeReasonRegistry} />

        <Route
            path={`${path}/periodicity`}
            component={PeriodicitiesRegistry} />

        <Route
            path={`${path}/amortizationGroup`}
            component={AmortizationGroupRegistry} />


        <Route
            path={`${path}/customerRating`}
            component={CustomerRatingRegistry} />

        <Route
            path={`${path}/documentRubricator`}
            component={DocumentRubricatorRegistry} />

        <Route
            path={`${path}/referenceDocument`}
            component={ReferenceDocumentRegistry}/>

        <Route
            path={`${path}/externalResource`}
            component={ExternalResourceRegistry}/>

        <Route
            path={`${path}/position`}
            component={PositionRegistry}/>

        <Route
            path={`${path}/aisSiEaistFund`}
            component={AisSiEaistFundRegistry}/>

        <Route
            path={`${path}/okpd2drugs`}
            component={Okpd2drugsRegistry}/>

        <Route
            path={`${path}/governmentProgram`}
            component={GovernmentProgramRegistry}/>

        <Route
            path={`${path}/rejectReason`}
            component={RejectReasonRegistry}/>

        <Route
            path={`${path}/lotAttribute`}
            component={LotAttributeRegistry}/>

        <Route
            path={`${path}/normativSource`}
            component={NormativSourceRegistry}/>

        <Route
            path={`${path}/eslp`}
            component={EslpRegistry}/>

        <Route
            path={`${path}/addressDictionary`}
            component={AddressDictionaryRegistry}/>

        <Route
            path={`${path}/npaDocumentTypeReference`}
            component={NpaDocumentTypeReferenceRegistry}/>

        <Route
            path={`${path}/typicalDocumentationSetting`}
            component={TypicalDocumentationSettingRegistry}/>

        <Route
            path={`${path}/utilityTarifZone`}
            component={UtilityTarifZoneRegistry} />

        <Route
            path={`${path}/tarifzone`}
            component={TarifzoneRegistry} />

        <Redirect
            from="/"
            to={`${path}/tradingPlatform`} />
    </Switch>
);

export default Reference;
