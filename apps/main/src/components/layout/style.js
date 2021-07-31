export default {
    '@global': {
        body: {
            padding: 0,
            margin: 0,
            fontFamily: ['Roboto', 'sans-serif']
        },

        '*:not(:defined)': {
            display: 'none'
        }
    },
    container: {
        display: 'grid',
        gridTemplateRows: [['auto', '1fr']],
        gridTemplateColumns: [['auto', '1fr']],
        gridTemplateAreas: `
            "header  header"
            "sidebar content"
        `,
        height: '100vh'
    },
    header: {
        gridArea: 'header',
        minHeight: 1
    },
    sidebar: {
        gridArea: 'sidebar',
        position: 'relative',
        minHeight: 1
    },
    content: {
        gridArea: 'content',
        position: 'relative',
        minHeight: 1,
        overflow: 'auto'
    }
};
