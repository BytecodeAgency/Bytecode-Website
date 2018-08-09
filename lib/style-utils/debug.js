export default () => `
    *:not(path):not(g) {
        $debug-background: hsla(210, 100%, 50%, 0.5);
        $debug-color: hsla(210, 100%, 100%, 0.9);
        $debug-outline: hsla(210, 100%, 100%, 0.5);
        background: $debug-background !important;
        box-shadow: none !important;
        color: $debug-color !important;
        outline: solid .25rem $debug-outline !important;
    }
`;
