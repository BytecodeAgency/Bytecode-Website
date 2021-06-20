import styled from 'styled-components';
import theme from '../../styles/extended/theme';
import InputField from '../../components/InputField';

const { size, height, spacing, font, weight, color, border } = theme.typography.button;

export const NewsletterSubscribeExtendedContainer = styled.div`
    margin-top: 2vh;
    padding: 10vw;
    text-align: center;
    max-width: 800px;
    @media (min-width: ${theme.breakpoint.md}) {
        padding: 3vw;
    }
`;

export const NewsletterSubscribeExtendedForm = styled.form`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50% 50%;
    text-align: center;
    @media (max-width: ${theme.breakpoint.xs}) {
        display: block;
    }
    > input {
        grid-column: span 2;
        background: ${theme.colors.white};
        color: ${theme.colors.black};
        @media (max-width: ${theme.breakpoint.xs}) {
            grid-column: none;
        }
    }
`;

export const NewsletterSubscribeExtendedInputField = styled(InputField)`
    background: ${theme.colors.secondary} !important;
    font-size: 16px;
    padding: 1em 1.33em;
    color: white !important;
`;

export const SubscribeExtendedButton = styled.button`
    display: inline-block;
    background: transparent;
    padding: 0.66em 2em;
    grid-column: 2 / span 2;
    border: ${border};
    border-radius: 5px;
    transition: all 0.2s ease;
    font-size: ${size};
    line-height: ${height};
    letter-spacing: ${spacing};
    font-family: ${font};
    font-weight: ${weight};
    color: ${color};
    text-decoration: none;
    margin: 1em 0;

    @media (max-width: ${theme.breakpoint.xs}) {
        grid-column: none;
        width: 100%;
    }

    &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        cursor: pointer;
    }
`;

