import React, { useState } from "react";
import styled from "styled-components";
import { Paragraph, Heading } from "../../components/Typography";
import { theme } from "../../theme";
import Image from "next/image";
import Popup from "./Components/Popup";
import { EmployeeName } from "../../content/contentGenerics";

export interface Member {
	name: string;
	jobTitle: string;
	id: EmployeeName;
	about: string;
	focus: string[];
	github?: string;
	email?: string;
	linkedIn?: string;
}

interface TeamMemberProps {
	member: Member;
}

const StyledName = styled(Heading)`
	font-family: ${theme.typography.paragraph.font};
`;

const TeamMemberImage = styled(Image)`
	&:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
	const { id, name, jobTitle } = member;
	const [popup, setPopup] = useState(false);
	const openPopup = () => {
		setPopup(true);
	};
	const closePopup = () => {
		setPopup(false);
	};
	return (
		<div>
			<Popup member={member} closePopup={closePopup} popup={popup} />
			<TeamMemberImage src={`/images/member-${id}.png`} alt="profile picture" width={312} height={455} onClick={openPopup} />
			<StyledName text={name} type="h4" />
			<Paragraph text={jobTitle} />
		</div>
	);
};


export default TeamMember;