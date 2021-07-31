import React from 'react';

const Classifier = ({
    Switch,
    Route,
    Redirect,
    KosguRegistry,
    OkeiRegistry,
    OkpdRegistry,
    OkatoRegistry,
    OkvedRegistry,
    OkdpRegistry,
    OkoguRegistry,
    OkopfRegistry,
    Okpd2Registry,
    OktmoRegistry,
    OkfsRegistry,
    OksmRegistry,
    OkvRegistry,
    MerCodeRegistry
}) => ({
    match: {path}
}) => (
    <Switch>
        <Route
            path={`${path}/okpd/`}
            component={OkpdRegistry} />

        <Route
            path={`${path}/okdp/`}
            component={OkdpRegistry} />

        <Route
            path={`${path}/kosgu/`}
            component={KosguRegistry} />

        <Route
            path={`${path}/okei/`}
            component={OkeiRegistry} />

        <Route
            path={`${path}/okato/`}
            component={OkatoRegistry} />

        <Route
            path={`${path}/okved/`}
            component={OkvedRegistry} />

        <Route
            path={`${path}/okogu/`}
            component={OkoguRegistry} />

        <Route
            path={`${path}/okopf/`}
            component={OkopfRegistry} />

        <Route
            path={`${path}/okpd2/`}
            component={Okpd2Registry} />

        <Route
            path={`${path}/okfs/`}
            component={OkfsRegistry} />

        <Route
            path={`${path}/okv/`}
            component={OkvRegistry} />

        <Route
            path={`${path}/oktmo/`}
            component={OktmoRegistry} />

        <Route
            path={`${path}/oksm/`}
            component={OksmRegistry} />

        <Route
            path={`${path}/merCode/`}
            component={MerCodeRegistry} />

        <Redirect
            from="/"
            to={`${path}/kosgu/`} />
    </Switch>
);

export default Classifier;
