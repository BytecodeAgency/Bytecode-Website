import styled from 'styled-components';
import theme from '../styles/theme';

const { colors } = theme;

const InputField = styled.input`
    font-size: 1.35rem;
    background: ${colors.secondary};
    border-radius: 0.1em;
    outline: none;
    border: none;
    padding: 0.66em 1em;
    margin: 0 0.1em 1em 0.1em;
    color: ${colors.white};
    border-bottom: 2px solid transparent;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        border-bottom: 2px solid ${colors.primary};
    }
    &.error {
        border-bottom: 2px solid ${colors.tertiary};
    }
`;

export default InputField;
