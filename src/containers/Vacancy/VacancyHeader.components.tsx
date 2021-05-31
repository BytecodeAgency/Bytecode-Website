import styled from 'styled-components';
import theme from '../../styles/theme';
import { Subtitle } from '../../components/Typography/Typography';

const { colors, mediaQueryMin, containerWidth } = theme;

export const VacancyHeaderBase = styled.header<{ backgroundImage: string }>`
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
        url(${(props) => props.backgroundImage});
    background-size: cover !important;
    background-position: center !important;
    min-height: 55vh;
    padding: 1em;
    position: relative;
    @media (${mediaQueryMin.sm}) {
        padding: 3em ${containerWidth.sm};
    }
    @media (${mediaQueryMin.md}) {
        padding: 2em ${containerWidth.md};
    }
    @media (${mediaQueryMin.lg}) {
        padding: 3em ${containerWidth.lg};
    }
    @media (${mediaQueryMin.xxl}) {
        padding: 7em ${containerWidth.xl};
    }
`;

export const VacancyHeaderInformation = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    @media (${mediaQueryMin.xs}) {
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        & > * {
            width: 50%;
            padding: 1em;
            justify-content: center;
        }
    }
    @media (${mediaQueryMin.md}) {
        & > * {
            width: 40%;
        }
    }
`;

export const StyledSubtitle = styled(Subtitle)`
    color: ${colors.primary} !important;
    text-shadow: 0 0 1em #000;
`;

