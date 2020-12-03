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

export const NewsLetterSubscribePopupContainer = styled.div`
    margin-top: 2vh;
    background: #1c1e1f;
    padding: 10vw;
    max-width: 800px;
    @media (min-width: ${theme.breakpoint.md}) {
        padding: 3vw;
    }
    position: fixed;
    right: 3%;
    bottom: 5%;
    border-radius: 10px;
    box-shadow: 5px 10px rgba(0, 0, 0, 0.3);
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

export const CloseButton = styled.button`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    height: 30px;
    width: 30px;
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 50%;
    border: none;
    &:hover {
        cursor: pointer;
    }
    font-weight: bold;
    font-size: large;
`;
