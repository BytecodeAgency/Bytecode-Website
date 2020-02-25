import styled from 'styled-components';
import theme from '../styles/theme';
import { Big, Small } from '../components/Typography';

const { mediaQueryMin, colors } = theme;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0.66em;
        margin-bottom: 0.33em;
        font-weight: ${theme.fontWeights.regular};
    }
    p {
        line-height: 1.5em;
        letter-spacing: 0.015em;
        font-weight: ${theme.fontWeights.light};
        b,
        strong {
            font-weight: ${theme.fontWeights.regular};
        }
    }
`;

export const ArticleHeader = styled.header`
    max-width: 80vw;
    @media (${mediaQueryMin.md}) {
        max-width: 40em;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    & > * {
        width: 100%;
    }
    &::before {
        content: '';
        background: ${colors.mediumgray};
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100vw;
        height: 35em;
        z-index: -1;
    }
    @media (${mediaQueryMin.md}) {
        margin-top: 5vh;
        &::before {
            height: 75vh;
        }
    }
`;

export const ArticleImageWrapper = styled.figure`
    width: 125%;
    margin: 0.66em 0;
    margin-bottom: 1em;
    height: 50rem;
    overflow: hidden;
`;

export const BlogContent = styled.div`
    max-width: 80vw;
    @media (${mediaQueryMin.sm}) {
        max-width: 40em;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    & > * {
        width: 100%;
    }
`;

export const Title = styled.h1`
    margin: 0.44em !important;
    padding: 0 0.33em;
`;

export const ArticleIntro = styled(Big)`
    margin-bottom: 1em;
    line-height: 1.22em !important;
`;

export const MetaData = styled.div`
    padding: 0 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PublishedOnContainer = styled.div`
    line-height: 0.7em;
    margin: 0;
    color: ${colors.lightgray};
    max-width: 5em;
    @media (${mediaQueryMin.md}) {
        max-width: unset;
    }
`;

export const SubtitleContainer = styled.div`
    display: flex;
    text-transform: uppercase;
    align-items: flex-end;
    padding: 0 1em;
    span,
    p {
        opacity: 0.3;
        color: ${colors.lightgray};
    }
`;

export const ReadingTime = styled(Small)`
    margin-bottom: 2px;
`;

export const ArticleImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CallToActionContainer = styled.div`
    margin: 2rem 4rem;
`;

export const CallToActionText = styled.p`
    font-weight: ${theme.fontWeights.regular} !important;
    font-style: italic;
    color: ${theme.colors.lightgray} !important;
`;
