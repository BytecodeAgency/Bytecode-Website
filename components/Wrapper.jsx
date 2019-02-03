import styled from 'styled-components';
import theme from '../styles/theme';

const Wrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 2rem 0% 0em 0em;
    padding: 2em 0em;
    @media screen and (min-width: ${theme.breakpoints[2]}px) {
        margin: 5rem 0% 10em 1em;
        padding: 2em 0em;
    }
    @media screen and (min-width: ${theme.breakpoints[3]}px) {
        margin: 10rem 0% 10em 5em;
        padding: 4em 0em;
    }
`;
export default Wrapper;
