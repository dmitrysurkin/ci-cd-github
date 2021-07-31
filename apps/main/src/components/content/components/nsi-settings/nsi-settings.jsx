import React from 'react';

const NsiSettings = ({
    Switch,
    Route,
    Redirect,
    ExceptionRegistrySmp,
    BuildingSubjectsSettings,
    PrepaymentExcessSettings,
    PurchaseAgreementSettings
}) => ({
    match: {path}
}) => (
    <Switch>
        <Route
            path={`${path}/exceptionRegistrySmp`}
            component={ExceptionRegistrySmp} />

        <Route
            path={`${path}/buildingSubjects`}
            component={BuildingSubjectsSettings} />

        <Route
            path={`${path}/prepaymentExcess`}
            component={PrepaymentExcessSettings} />

        <Route
            path={`${path}/purchaseAgreement`}
            component={PurchaseAgreementSettings} />

        <Redirect
            from="/"
            to={`${path}/exceptionRegistrySmp`} />
    </Switch>
);

export default NsiSettings;
