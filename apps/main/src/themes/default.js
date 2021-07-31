export default {
    button: {
        background: {
            positive: '#4db2ff',
            negative: '#FF6666',
            neutral: '#999999',
            control: 'transparent',
        },
        color: {
            regular: '#FFFFFF',
            positive: '#4db2ff',
            negative: '#FF6666',
            neutral: '#999999',
        },
        borderRadius: 20
    },

    input: {
        background: {
            negative: '#FEECEC',
            neutral: '#F8F8F8'
        },

        glyph: {
            color: {
                positive: '#5CCEC3',
                negative: '#FA8282',
                neutral: '#578FD7',
                dark: '#404040',
                warning: '#E8C844',
                default: 'inherit'
            },
        },
        inset: {
            positive: [['inset', 0, -1, 0, 0, '#5CCEC3']],
            negative: [['inset', 0, -1, 0, 0, '#FA8282']],
            neutral: [['inset', 0, -1, 0, 0, '#578FD7']]
        },
    },

    font: {
        color: {
            regular: '#404040',
            positive: '#5CCEC3',
            alternative: '#FFFFFF',
            negative: '#FA8282',
            link: '#5C90D2'
        },
        size: {
            extrasmall: '0.68rem',
            small: '0.81rem',
            normal: '0.875rem',
            large: '1.125rem',
            extraLarge: '1.875rem',
            glyph: '1rem'
        },
        weight: {
            normal: 200,
            bold: 500
        }
    },

    padding: {
        smallest: '0.35rem',
        small: '0.715rem',
        normal: '1.42rem',
        large: '2.14rem'
    },

    block: {
        shadow: [[1, 3, 4, '#E6E6E6']],
        shadowHover: [[5, 9, 15, '#ECECEC']],
        color: {
            view: '#EEF4FB',
            edit: '#E7F8F6',
            error: '#FEECEC',
            background: '#FFFFFF'
        },
        textColor: '#000000',
        margin: '1.25rem',
        header: {
            padding: '1.25rem'
        }
    },

    modal: {
        shadow: [[1, 4, 5, 'rgba(0,0,0, 0.2)']]
    },

    transition: {
        instant: '0.1s',
        fast: '0.2s',
        normal: '0.3s',
        slow: '0,5s'
    }
};
