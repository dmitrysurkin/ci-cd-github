import React from 'react';

const Bids = ({
    Switch,
    Route,
    Redirect,
    PurchasesMeetingsRgGrbs,
    PurchasesMeetingsRgGrbsRegistry,
    PurchasesBids,
    PurchasesBidsRegistry,
    PurchasesCorrectionRemarks,
    PurchasesCorrectionRemarksRegistry,
}) => ({
    match: {path},
}) => {
    return (
        <Switch>
            <Route
                path={`${path}/meetings-rg-grbs/:id(new|\\d+)`}
                component={PurchasesMeetingsRgGrbs} />

            <Route
                path={`${path}/meetings-rg-grbs`}
                component={PurchasesMeetingsRgGrbsRegistry} />

            <Route
                path={`${path}/bids/:id(new|\\d+)`}
                component={PurchasesBids} />

            <Route
                path={`${path}/bids`}
                component={PurchasesBidsRegistry} />

            <Route
                path={`${path}/correction-remarks/:id(new|\\d+)`}
                component={PurchasesCorrectionRemarks} />

            <Route
                path={`${path}/correction-remarks`}
                component={PurchasesCorrectionRemarksRegistry} />

            <Redirect
                from="/"
                to={`${path}/meetings-rg-grbs`} />
        </Switch>
    );
};

export default Bids;