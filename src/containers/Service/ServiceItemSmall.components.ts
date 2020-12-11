// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../../styles/theme';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextBlock/TextBlock' was resolved to '/... Remove this comment to see the full error message
import TextBlock from '../TextBlock/TextBlock';
import { Container } from '../../lib/Grid';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin } = theme;

export const StyledLogo = styled.img`
    min-width: 10%;
    height: auto;
    width: auto;
`;

export const CenteredTextBlock = styled(TextBlock)`
    text-align: center;
`;
export const Containment = styled(Container)`
    margin-top: 0 !important;
    margin-bottom: 3em !important;
    @media (${mediaQueryMin.xs}) {
        margin-top: 3em !important;
        margin-bottom: 5em !important;
    }
    @media (${mediaQueryMin.sm}) {
        margin-top: 0 !important;
        margin-bottom: 3em !important;
    }
`;
