import styled from 'styled-components';
import theme from '../../styles/theme';
import { Col } from '../../lib/Grid';

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
