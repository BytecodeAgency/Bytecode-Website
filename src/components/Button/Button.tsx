import React from 'react';
import { ButtonProps } from './Button.types';
import {
    StyledGatsbyButton,
    StyledAnchor,
    StyledButton,
} from './Button.components';

const Button: React.FC<ButtonProps> = ({
    href,
    useGatsbyLink = false,
    rel,
    submit,
    target,
    onClick,
    disabled,
    children,
}) => {
    if (useGatsbyLink) {
        if (href) {
            return (
                <StyledGatsbyButton
                    to={href}
                    rel={rel}
                    target={target}
                    onClick={onClick}
                >
                    {children}
                </StyledGatsbyButton>
            );
        }
    }
    if (submit) {
        return (
            <StyledButton type="button" onClick={onClick} disabled={disabled}>
                {children}
            </StyledButton>
        );
    }
    return (
        <StyledAnchor href={href} rel={rel} target={target} onClick={onClick}>
            {children}
        </StyledAnchor>
    );
};

export default Button;
