import styled from 'styled-components';
import theme from '../../styles/theme';

export const NewsletterSubscribeContainer = styled.div`
    margin-top: 2vh;
    background: #1c1e1f;
    padding: 10vw;
    max-width: 800px;
    @media (min-width: ${theme.breakpoint.md}) {
        padding: 3vw;
    }
`;

export const NewsletterSubscribeForm = styled.form`
    @media (min-width: ${theme.breakpoint.md}) {
        display: flex;
        > input {
            flex: 1;
        }
    }
`;

export const SubscribeButton = styled.button`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    height: 56.5px;
    padding: 12px 24px;
    margin-left: 5px;
    border-radius: 2px;
    border: none;
    text-align: center;
    font-size: 1.35rem;
`;
