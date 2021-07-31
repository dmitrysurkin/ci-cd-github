export default ({button, font}) => ({
    button: {
        display: 'inline-block',
        border: ({outline, type}) => outline
            ? [[1, 'solid', button.background[type || 'positive']]]
            : 0,
        borderRadius: button.borderRadius,
        verticalAlign: 'top',
        margin: 0,
        position: 'relative',
        width: 'auto',
        fontSize: font.size.normal,
        fontWeight: 500,
        minWidth: 32,
        minHeight: 32,
        padding: ({icon}) => icon
            ? 4
            : [[4, 20]],
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all .2s',

        color: ({type, outline, slick}) => ('control' === type)
            ? button.background.neutral
            : (outline || slick)
                ? button.background[type || 'positive']
                : button.color.regular,

        background: ({type, slick, outline}) => outline
            ? '#FFFFFF'
            : slick
                ? 'transparent'
                : button.background[type || 'positive'],



        opacity: ({disabled, pending}) => (disabled || pending)
            ? 0.5
            : 1,

        '&:hover': {
            opacity: ({disabled, pending}) => (disabled || pending)
                ? 0.5
                : 0.8
        },

        '&:focus': {
            outline: 'none'
        },

        '& + &': {
            marginLeft: 10
        }
    }
});