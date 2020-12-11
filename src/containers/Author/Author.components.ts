import styled from 'styled-components';
import theme from '../../styles/theme';

export const AuthorBlock = styled.div`
    display: flex;
    align-items: center;
    p {
        margin: 0;
    }
    @media (max-width: ${theme.breakpointMobileMenu}) {
        h4 {
            font-size: 1.4rem;
        }
        h5 {
            font-size: 0.8rem;
        }
    }
`;

export const AuthorBlockPhotoWrapper = styled.figure`
    width: 2.11em;
    height: 2.11em;
    border-radius: 50%;
    overflow: hidden;
`;

export const AuthorBlockPhoto = styled.img`
    height: 100%;
    width: auto;
`;

export const AuthorInfo = styled.div`
    padding: 0 0.66em;
`;

export const Name = styled.h6`
    margin: 0 !important;
    padding: 0;
    line-height: 1em;
`;

export const Position = styled.p`
    margin: 0;
    font-size: 0.8em;
    line-height: 1.11em;
`;
