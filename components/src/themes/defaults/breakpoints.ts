const breakpoints = {
    xs: 0, // mobile
    sm: 576, // mobile landscape
    md: 768, // tablets
    lg: 992, // Wide
    xl: 1200, // Extra large
    xxl: 1400, // Extra extra large
}

export const layout = {
    gutter: 24,
    columns: 12,
    container: {
        margin: {
            sm: '12px',
            md: '16px',
            lg: '32px',
            xl: '48px',
            xxl: '64px'
        },
        sizes: { // Max Width
            sm: '540px',
            md: '720px',
            lg: '960px',
            xl: '1140px',
            xxl: '1320px',
            fluid: '100%'
        },
        spacing: {
            sm: 20,
            md: 40,
            lg: 60,
            xl: 100,
            xxl: 160
        }
    },

}

export default breakpoints
