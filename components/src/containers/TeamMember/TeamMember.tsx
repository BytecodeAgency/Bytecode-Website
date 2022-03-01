import React, {useState} from "react";
import styled from "styled-components";
import {Paragraph, Heading} from "../../components/Typography/Typography";
import {theme} from "../../theme";
import Image from "next/image";
import Popup from "./Components/Popup";

export interface Member {
    name: string;
    jobTitle: string;
    src: string;
	about: string;
	focus: string[];
	github?: string;
	email?: string;
	linkedIn?: string;
}

interface TeamMemberProps{
	member: Member;
}

const StyledName = styled(Heading)`
	font-family: ${theme.typography.paragraph.font};
`;

const TeamMember: React.FC<TeamMemberProps> = ({member}) => {
	const {src, name, jobTitle} = member;
	const [popup, setPopup] = useState(false);
	const openPopup = () => {
		setPopup(true);
	};
	const closePopup = () => {
		setPopup(false);
	};
	return (
		<div>
			<Popup member={member} closePopup={closePopup} popup={popup}/>
			<Image src={`/images/member-${src}.png`} alt="profile picture" width={312} height={455} onClick={openPopup}/>
			<StyledName text={name} type="h4"/>
			<Paragraph text={jobTitle}/>
		</div>
	);
};


export default TeamMember;