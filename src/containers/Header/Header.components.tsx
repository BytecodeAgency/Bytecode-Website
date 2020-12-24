import styled from 'styled-components';
import theme from '../../styles/theme';
import { Subtitle } from '../../components/Typography/Typography';

const { colors, mediaQueryMin, containerWidth } = theme;

export const HeaderBase = styled.header<{
    backgroundImage: string;
}>`
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent),
        url(${(props) => props.backgroundImage});
    background-size: cover !important;
    background-position: center !important;
    height: 100vh;
    padding: 1em;
    display: flex;
    align-items: flex-end;
    @media (${mediaQueryMin.sm}) {
        padding: 3em ${containerWidth.sm};
        background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 50%),
            url(${(props) => props.backgroundImage});
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

export const HeaderInformation = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: baseline;

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
    color: ${colors.lightgray} !important;
    text-shadow: 0 0 1em #000;
`;

export const ArrowDown = styled.img`
    width: 1em;
    position: absolute;
    right: 50vw;
    margin-right: 0.5em;
    opacity: 0.5;
`;

export const Text = styled.p`
    text-shadow: 0 0 1em #000;
`;
