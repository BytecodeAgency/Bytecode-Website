import styled from 'styled-components';
import theme from '../styles/theme';

const Wrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 2rem 0% 0em 0em;
    padding: 2em 0em;
    @media screen and (min-width: ${theme.breakpoints[2]}px) {
        margin: 1rem 0% 5em 1em;
        padding: 1em 1em;
    }
    @media screen and (min-width: ${theme.breakpoints[3]}px) {
        margin: 1rem 0% 2em 2em;
        padding: 1em 5em;
    }
`;
export default Wrapper;
