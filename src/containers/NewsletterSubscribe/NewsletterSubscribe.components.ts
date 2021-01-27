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
    background: ${theme.colors.offWhite};
    padding: 10vw;
    max-width: 800px;
    @media (min-width: ${theme.breakpoint.md}) {
        padding: 3vw;
    }
    position: fixed;
    right: 3%;
    bottom: 5%;
    box-shadow: 5px 10px rgba(0, 0, 0, 0.3);
    z-index: 101010;
    h4,
    p {
        color: ${theme.colors.black};
    }
`;

export const NewsletterSubscribeForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    @media (max-width: ${theme.breakpoint.xs}) {
        grid-template-columns: 1fr;
    }
    > input {
        background: ${theme.colors.white};
        color: ${theme.colors.black};
    }
`;

export const SubscribeButton = styled.button`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    height: 56.5px;
    padding: 12px 24px;
    margin-left: 5px;
    border-radius: 10rem;
    border: none;
    text-align: center;
    font-size: 1.35rem;
    max-width: 220px;

    @media (max-width: ${theme.breakpoint.md}) {
        padding: 12px;
    }
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
