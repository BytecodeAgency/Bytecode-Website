export default type => {
    switch (type) {
        case 'both':
            return `display:flex;align-items:center;justify-content:center;`;
        case 'vertical':
            return `display:flex;align-items:center;`;
        case 'horizontal':
            return `display:flex;justify-content:center;`;
        default:
            return '';
    }
};
