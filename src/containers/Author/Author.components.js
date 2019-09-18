import styled from 'styled-components';
import theme from '../../styles/theme';

export const AuthorBlock = styled.div`
    display: flex;
    align-items: center;
    max-width: 40rem;
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

export const AuthorBlockPhoto = styled.img`
    min-width: 5rem;
    width: 5rem;
    min-height: 5rem;
    height: 5rem;
    margin-right: 2rem;
    border-radius: 50%;
    overflow: hidden;
    background-image: url(${props => props.src});
    background-size: cover;
`;
