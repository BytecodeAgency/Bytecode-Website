import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../../styles/theme';

const { mediaQueryMin } = theme;

export const StyledContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;
export const StyledTextContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 45%;
    padding: 7%;
`;

export const StyledTitle = styled.h1``;
export const StyledText = styled.p``;

export const StyledImageContainer = styled.section`
    width: 55%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
export const StyledImage = styled.img`
    min-width: 100%;
`;

export const StyledImageTitleContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 10%;
    position: relative;
    bottom: 30%;
`;

export const StyledImageTitleTextContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const StyledImageTitle = styled.h3`
    @media (${mediaQueryMin.sm}) {
        font-size: 3vmin;
    }
`;

export const StyledImageSubtitle = styled.p``;

export const ArrowLink = styled(Link)``;
export const ArrowImage = styled.img`
    transform: scaleX(-1);
`;
