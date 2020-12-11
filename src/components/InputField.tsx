// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../styles/theme';

const InputField = styled.input`
    font-size: 1.35rem;
    background: ${theme.colors.secondary};
    border-radius: 0.1em;
    outline: none;
    border: none;
    padding: 0.66em 1em;
    margin: 0 0.1em 1em 0.1em;
    color: ${theme.colors.white};
    border-bottom: 2px solid transparent;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        border-bottom: 2px solid ${theme.colors.primary};
    }
    &.error {
        border-bottom: 2px solid ${theme.colors.tertiary};
    }
`;

export default InputField;
