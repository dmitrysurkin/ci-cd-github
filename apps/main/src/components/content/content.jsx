import React from 'react';

const Content = ({
    Switch,
    Route,
    Redirect,
    Loader,
    Finance,
    PlanCoordination,
    Purchases,
    SectorAgreement,
    ContractCoordination,
    Bids,
    Settings,
}) => ({
    isLoading,
}) => (
    <Loader isLoading={isLoading}>
        <Switch>
            <Redirect
                from="/nmc-coordination-grbs"
                to="/module/arm-grbs/static/purchases/bids" />

            <Redirect
                from="/nmc-coordination-rg-grbs"
                to="/module/arm-grbs/static/purchases/meetings-rg-grbs" />

            <Redirect
                from="/nmc-coordination-grbs/accomodation-applications/"
                to="/module/arm-grbs/static/purchases/bids" />

            <Redirect
                from="/nmc-coordination-grbs/cancellation-applications/"
                to="/module/arm-grbs/static/purchases/bids" />

            <Redirect
                from="/nmc-coordination-grbs/explanation-applications/"
                to="/module/arm-grbs/static/purchases/bids" />

            <Redirect
                from="/nmc-coordination-grbs/change-applications/"
                to="/module/arm-grbs/static/purchases/bids" />

            <Redirect
                from="/nmc-coordination-rg-grbs/grbs-meetings/"
                to="/module/arm-grbs/static/purchases/meetings-rg-grbs" />

            <Route
                path="/module/arm-grbs/static/finance"
                component={Finance} />

            <Route
                path="/module/arm-grbs/static/plan-coordination"
                component={PlanCoordination} />

            <Route
                path="/module/arm-grbs/static/purchases"
                component={Purchases} />

            <Route
                path="/module/arm-grbs/static/sector-agreement"
                component={SectorAgreement} />

            <Route
                path="/module/arm-grbs/static/contract-coordination"
                component={ContractCoordination} />

            <Route
                path="/module/arm-grbs/static/bids"
                component={Bids} />

            <Route
                path="/module/arm-grbs/static/settings"
                component={Settings} />

            <Redirect
                from="/"
                to="/module/arm-grbs/static/plan-coordination" />
        </Switch>
    </Loader>
);

export default Content;
