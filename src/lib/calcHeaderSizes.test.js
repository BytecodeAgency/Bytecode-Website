import calcHeaderSizes from './calcHeaderSizes';

describe('calcHeaderSizes', () => {
    it('should return h1 to h6', () => {
        const received = calcHeaderSizes(1, 10);
        expect(received.includes('h1')).toBe(true);
        expect(received.includes('h2')).toBe(true);
        expect(received.includes('h3')).toBe(true);
        expect(received.includes('h4')).toBe(true);
        expect(received.includes('h5')).toBe(true);
        expect(received.includes('h6')).toBe(true);
    });
});
