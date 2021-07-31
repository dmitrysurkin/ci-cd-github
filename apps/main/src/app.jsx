import React from 'react';

import Context from 'Component/context';
import Layout from 'Component/layout';
import Content from 'Component/content';

export default () => (
    <>
        <Context />

        <Layout>
            <Content />
        </Layout>
    </>
);
