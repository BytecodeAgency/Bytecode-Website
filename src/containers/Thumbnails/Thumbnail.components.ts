import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const ThumbnailContainer = styled.div`
    height: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 0.5em;
    &:hover div,
    &:focus div {
        background-color: #080808;
    }
    @media (${mediaQueryMin.md}) {
        margin: 0 0.5em 0rem;
        width: 100%;
    }
`;

interface ImageContainerProps {
    backgroundURL?: string;
}
export const ServiceImageContainer =
    styled.div <
    ImageContainerProps >
    `
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.backgroundURL});
    background-size: cover;
    background-blend-mode: overlay;
    background-color: #1a1a1a;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
`;

export const Icon = styled.figure`
    width: 80%;
    height: auto;
    max-height: 20rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
`;

export const ServiceImage = styled.img`
    max-width: 8rem;
    margin-bottom: 2rem;
`;

export const ServiceName = styled.p`
    text-align: center;
`;
