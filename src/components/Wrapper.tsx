// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../styles/theme';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin } = theme;

const Wrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 0;
    padding: 0.5em;
    @media screen and (${mediaQueryMin.sm}) {
        margin: 1rem;
        padding: 1em;
    }
`;
export default Wrapper;
