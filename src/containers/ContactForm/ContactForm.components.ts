import styled from 'styled-components';
import theme from '../../styles/theme';

const { colors, typography } = theme;
export const ContactFormContainer = styled.div`
    padding: 1em 0;
`;

export const ErrorMessage = styled.div`
    margin-left: 1.33em;
    color: ${colors.tertiary};
`;

export const InputTextArea = styled.textarea`
    font-size: 1.35rem;
    background: ${colors.secondary};
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
        border-bottom: 2px solid ${colors.primary};
    }
    &.error {
        border-bottom: 2px solid ${colors.tertiary};
    }
    &.text {
        font-family: ${typography.form.font};
        color: ${colors.white};
    }
`;

export const StyledNotification = styled.div`
    color: white;
    padding: 3rem;
    &.success {
        background: ${colors.primary};
    }
    &.error {
        background: ${colors.tertiary};
    }
`;
