import styled from 'styled-components';
import theme from '../../styles/theme';
import Button from '../../components/Button';

export const ContactFormContainer = styled.div`
    padding: 1em 0;
`;

export const SendButton = styled(Button)`
    &:hover {
        cursor: pointer;
    }
`;

export const ErrorMessage = styled.div`
    margin-left: 1.33em;
    color: ${theme.colors.tertiary};
`;

export const InputTextArea = styled.textarea`
    font-size: 1.35rem;
    background: ${theme.colors.secondary};
    border-radius: 0.1em;
    outline: none;
    border: none;
    padding: 1em;
    margin: 0 0.1em 1.33em;
    width: 100%;
    min-height: 20em;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        border-bottom: 2px solid ${theme.colors.primary};
    }
    &.error {
        border-bottom: 2px solid ${theme.colors.tertiary};
    }
    &.text {
        font-family: ${theme.typography.form.font};
        color: ${theme.colors.white};
    }
`;

export const StyledNotification = styled.div`
    color: white;
    padding: 3rem;
    &.success {
        background: ${theme.colors.primary};
    }
    &.error {
        background: ${theme.colors.tertiary};
    }
`;
