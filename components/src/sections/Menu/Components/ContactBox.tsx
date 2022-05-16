import React from "react";
import { theme } from "../../../theme";
import styled from "styled-components";
import Link from "next/link";

const StyledContactBoxContainer = styled.div`
    border: 1px solid ${theme.colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;
	cursor: pointer;
`;

const StyledContactBoxInner = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
`;

const ContactBox: React.FC<{ icon: string; text: string; url: string; }> = ({ text, url }) => {
	//TODO: add icon
	return (
		<Link href={url}>
			<StyledContactBoxContainer>
				<StyledContactBoxInner>
					{text}
				</StyledContactBoxInner>
			</StyledContactBoxContainer>
		</Link>

	);
};

export default ContactBox;