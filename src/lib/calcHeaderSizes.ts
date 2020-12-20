const calcHeaderSize = (scale: number, baseSize: number): string => {
    const elements = ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'];
    const rawCSSArr = elements.map((element, count) => {
        const multiplier = baseSize * scale ** count;
        return `${element} {font-size: ${multiplier}rem;}`;
    });
    return rawCSSArr.join('\n');
};

export default calcHeaderSize;
