// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../../styles/theme';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin, containerWidth } = theme;

export const MainHeader = styled.header`
     background: url(${(props: any) => props.img})
            ${(props: any) =>
                props.shadow &&
                `
,linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.8) 30%,
    rgba(0, 0, 0, 0) 90%,
    rgba(0, 0, 0, 0) 100%
);
`};
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
        align-items: ${(props: any) => props.align || 'flex-end'};
        max-height: 75em;
        min-height: 30em;
        background: url(${(props: any) => props.img})
            ${(props: any) =>
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
        background-size: ${(props: any) => props.bgSize || 'cover'};
        background-repeat: no-repeat;
        background-position-x: ${(props: any) => props.bgX || '85%'};
        background-position-y: ${(props: any) => props.bgY || 0};
    }
    @media (${mediaQueryMin.lg}) {
        background: url(${(props: any) => props.img})
        ${(props: any) =>
            props.shadow &&
            `
    ,linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.5) 30%,
        rgba(0, 0, 0, 0) 70%,
        rgba(0, 0, 0, 0) 100%
    );
`}
        background-size: ${(props: any) => props.bgSize || 'cover'};
        background-repeat: no-repeat;
        background-position-x: ${(props: any) => props.bgX || '85%'};
        background-position-y: ${(props: any) => props.bgY || 0};
        min-height: ${(props: any) => (props.hero ? '100vh' : '80vh')};

        background-blend-mode: ${(props: any) =>
            props.blendMode || 'soft-light'};
    }
    .content {
        margin-left: 0;
    }
`;

export const MainHeaderContent = styled.div`
    margin: 12em ${containerWidth.xs};
    @media (${mediaQueryMin.sm}) {
        margin: 2em ${containerWidth.sm};
        width: 66vw;
    }

    @media (${mediaQueryMin.md}) {
        margin: 0 ${containerWidth.md};
        width: 40vw;
    }

    @media (${mediaQueryMin.lg}) {
        margin: 2.5vw ${containerWidth.lg};
    }

    @media (${mediaQueryMin.xl}) {
        margin: 4vw ${containerWidth.xl}};
    }
`;
