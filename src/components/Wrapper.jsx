import styled from 'styled-components';
import theme from '../styles/theme';

const { mediaQueryMin } = theme;
const container = theme.containerWidth;

const Wrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 0em;
    padding: 0.5em;
    @media screen and (${mediaQueryMin.sm}) {
        margin: 1rem;
        padding: 1em;
    }
`;
export default Wrapper;
