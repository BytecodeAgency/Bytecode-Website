// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Col } from '../../lib/Grid';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin } = theme;

export const Step = styled(Col)`
    @media (${mediaQueryMin.xs}) {
        margin: 0 2em;
    }
`;

export const ProcessStepImage = styled.img`
    margin: 5rem 5rem 5rem 3rem;
    height: 400px;
    width: auto;
    text-align: center;
    @media (${mediaQueryMin.xs}) {
        margin-bottom: 4em;
    }
    @media (${mediaQueryMin.sm}) {
        width: 50%;
    }
`;
