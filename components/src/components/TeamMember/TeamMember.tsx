import React from "react";
import styled from "styled-components";
import {Paragraph, Heading} from "../Typography/Typography";
import theme from "../../theme";

export interface Member {
    name: string;
    jobTitle: string;
    src: string;
}

const StyledName = styled(Heading)`
  	font-family: ${theme.typography.paragraph.font};
`;
const TeamMember: React.FC<Member> = ({name, jobTitle, src}) => {
	return (
		<div>
			<img src={`/images/member-${src}.png`} alt="profile picture"/>
			<StyledName text={name} type="h4"/>
			<Paragraph text={jobTitle}/>
		</div>
	);
};


export default TeamMember;