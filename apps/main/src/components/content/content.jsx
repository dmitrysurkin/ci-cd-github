import React from 'react';

const Content = ({
    Switch,
    Route,
    Redirect,
    Reference,
    Classifier,
    NsiSettings,
    ReferenceKpgzSpgz,
    Participants
}) => () => (
    <Switch>
        <Route
            path="/module/nsi/static/reference"
            component={Reference} />

        <Route
            path="/module/nsi/static/classifier"
            component={Classifier} />

        <Route
            path="/module/nsi/static/nsi-settings"
            component={NsiSettings} />

        <Route
            path="/module/nsi/static/referenceKpgzSpgz"
            component={ReferenceKpgzSpgz} />

        <Route
            path="/module/nsi/static/participants"
            component={Participants} />

        <Redirect
            from="/"
            to="/module/nsi/static/reference" />
    </Switch>
);

export default Content;
