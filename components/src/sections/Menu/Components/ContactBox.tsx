import React from "react";
import { theme } from "../../../theme";
import styled from "styled-components";

const StyledContactBoxContainer = styled.div`
    border: 1px solid ${theme.colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledContactBoxInner = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
`;

const ContactBox: React.FC<{ icon: string; text: string; }> = ({ text }) => {
	//TODO: add icon
	return (
		<StyledContactBoxContainer>
			<StyledContactBoxInner>
				{text}
			</StyledContactBoxInner>
		</StyledContactBoxContainer>
	);
};

export default ContactBox;