import React from 'react';

const Settings = ({
    Switch,
    Route,
    Redirect,
    SettingsGeneral,
    Settings44fzRegistry,
    Settings223fz,
}) => ({
    match: {path},
}) => {
    return (
        <Switch>
            <Route
                path={`${path}/general`}
                component={SettingsGeneral} />

            <Route
                path={`${path}/44fz`}
                component={Settings44fzRegistry} />

            <Route
                path={`${path}/223fz`}
                component={Settings223fz} />

            <Redirect
                from="/"
                to={`${path}/general`} />
        </Switch>
    );
};

export default Settings;