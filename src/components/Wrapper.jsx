import styled from 'styled-components';
import theme from '../styles/theme';

const { mediaQuery } = theme;
const container = theme.containerWidth;

const Wrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 0em;
    padding: 0.5em;
    @media screen and ${mediaQuery.sm} {
        margin: 1rem;
        padding: 1em;
    }
    /* @media screen and ${mediaQuery.md} {
        margin: 1rem 0% ${container.md} 1em;
        padding: 1em 5em;
    }
    @media screen and ${mediaQuery.lg} {
        margin: 1rem 0% ${container.lg} 1em;
        padding: 1em 1em;
    }
    @media screen and ${mediaQuery.xl} {
        margin: 1rem 0% 2em 1em;
        padding: 1em 5em;
    } */
`;
export default Wrapper;
