import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin, containerWidth } = theme;

export const MainHeader = styled.header`
    background-image: url(${props => props.img});
    background-blend-mode: soft-light;
    display: flex;
    background-size: cover;
    animation: fadeIn 2s;
    padding: 3em 1em;
    align-items: end;
    height: 100vh;
    max-height: 40em;
    transition: 0.5s ease-in-out;
    @media (${mediaQueryMin.xs}) {
        padding: 3em 3em;
        align-items: ${props => props.align || 'flex-end'};
        max-height: 75em;
        min-height: 30em;
        background: url(${props => props.img})
            ${props =>
                props.shadow &&
                `
                ,linear-gradient(
                    to top,
                    rgba(0, 0, 0, 0.7) 0%,
                    rgba(0, 0, 0, 0.6) 30%,
                    rgba(0, 0, 0, 0) 90%,
                    rgba(0, 0, 0, 0) 100%
                );
            `}
        background-size: ${props => props.bgSize || 'cover'};
        background-repeat: no-repeat;
        background-position-x: ${props => props.bgX || '85%'};
        background-position-y: ${props => props.bgY || 0};
    }
    @media (${mediaQueryMin.lg}) {
        background: url(${props => props.img})
        ${props =>
            props.shadow &&
            `
                ,linear-gradient(
                    to top,
                    rgba(0, 0, 0, 0.85) 0%,
                    rgba(0, 0, 0, 0.8) 30%,
                    rgba(0, 0, 0, 0) 70%,
                    rgba(0, 0, 0, 0) 100%
                );
            `}
        background-size: ${props => props.bgSize || 'cover'};
        background-repeat: no-repeat;
        background-position-x: ${props => props.bgX || '85%'};
        background-position-y: ${props => props.bgY || 0};
        min-height: ${props => (props.hero ? '100vh' : '80vh')};

        background-blend-mode: ${props => props.blendMode || 'soft-light'};
    }
    .content {
        margin-left: 0;
    }
`;

export const MainHeaderContent = styled.div`
    margin: 2em ${containerWidth.xs};
    @media (${mediaQueryMin.sm}) {
        margin: 2em ${containerWidth.sm};
        width: 66vw;
    }

    @media (${mediaQueryMin.md}) {
        margin: 2em ${containerWidth.md};
        width: 33vw;
    }

    @media (${mediaQueryMin.lg}) {
        margin: 2.5vw ${containerWidth.lg};
    }

    @media (${mediaQueryMin.xl}) {
        margin: 4vw ${containerWidth.xl}};
    }
`;
