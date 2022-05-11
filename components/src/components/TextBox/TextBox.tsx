import React from "react";
import { theme } from "../../theme";
import styled from "styled-components";
import { WithStyle } from "../../types/utils";

const TextBoxContainer = styled.div`
    padding: 20px;
    position: relative;
    background-color: #FFF;
    border: 1px solid ${theme.colors.black};
    border-radius: 10px;
    box-shadow: 4px 4px rgba(37, 58, 143, 0.25);
    cursor: pointer;

    &:hover {
        box-shadow: 6px 6px rgba(37, 58, 143, 0.25);
    }
`;

interface TextBoxProps {
    children: React.ReactNode;
}

const TextBox: React.FC = ({ children }: WithStyle<TextBoxProps>) => {
	return <TextBoxContainer>{children}</TextBoxContainer>;
};

export default TextBox;