import React from 'react';

const ReferenceKpgzSpgz = ({
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
}) => ({
    match: {path}
}) => (
    <Switch>
        <Route
            path={`${path}/kpgz/:id(new|\\d+)`}
            component={Kpgz} />

        <Route
            key='kpgz/show-for-date'
            path={`${path}/kpgz/show-for-date/:date`}
            component={KpgzRegistry} />

        <Route
            key='kpgz'
            path={`${path}/kpgz/`}
            component={KpgzRegistry} />

        <Route
            path={`${path}/ktruConversion/:id(new|\\d+)`}
            component={KtruConversion} />

        <Route
            path={`${path}/ktru/:id(new|\\d+)`}
            component={Ktru} />

        <Route
            path={`${path}/spgz/:id(new|\\d+)`}
            component={Spgz} />

        <Route
            path={`${path}/characteristic/:id(new|\\d+)`}
            component={Characteristic} />

        <Route
            path={`${path}/emiasconvertion/:id(new|\\d+)`}
            component={Emiasconvertion} />

        <Route
            path={`${path}/innovativeProductions`}
            component={InnovativeProductions} />

        <Route
            path={`${path}/spgzNeedNormalized`}
            component={SpgzNeedNormalized} />

        <Route
            path={`${path}/nsiGoods/`}
            component={NsiGoodsRegistry} />

        <Route
            path={`${path}/emiasconvertion`}
            component={EmiasconvertionRegistry} />

        <Route
            path={`${path}/bannedKpgz/`}
            component={BannedKpgzRegistry} />

        <Route
            path={`${path}/characteristic`}
            component={CharacteristicRegistry} />
            
        <Route   
            path={`${path}/ktru`}
            component={KtruRegistry} />
        
        <Redirect
            from="/"
            to={`${path}/kpgz/`} />
    </Switch>
);

export default ReferenceKpgzSpgz;
