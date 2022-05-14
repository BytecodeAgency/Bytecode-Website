import React, { Children } from "react";
import { Container, Heading } from "../../components";
import { responsiveValuesCSS, breakpointNameToPx } from "../../helpers";
import styled from "styled-components";

const caseTeamMembersSectionResponsiveCSS = () => {
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			xs: 30,
		})
	);
	const paddingBottom = responsiveValuesCSS(
		"padding-bottom",
		"px",
		breakpointNameToPx({
			xs: 30,
			md: 60,
		})
	);

	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			sm: "1fr",
			md: "290px auto"
		})
	);

	return paddingBottom + paddingTop + gridColumns;
};

const membersContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "auto",
			sm: "repeat(2, auto)"
		})
	);

	const justifyContent = responsiveValuesCSS(
		"justify-content",
		"",
		breakpointNameToPx({
			xs: "start",
			md: "center"
		})
	);

	return gridColumns + justifyContent;
};

const CaseTeamMembersContainer = styled(Container)`
	${caseTeamMembersSectionResponsiveCSS};
	margin: 0 auto;
	display: grid;
	align-items: center;
	justify-content: center;
	grid-gap: 1em;
	background-origin: border-box;
`;

const MembersContainer = styled(Container) <{ countItems: number }>`
	${membersContainerResponsiveCSS};
	margin: 0 auto;

	display: grid;
	gap: 2em;
	justify-items: center;
	align-items: end;
	background-origin: border-box;

	text-align: center;
`;


const CaseTeamMembers: React.FC = ({ children }) => {
	const count = Children.count(children);

	return (<CaseTeamMembersContainer>
		<Heading text="Meet startup team members" type="h2" />
		<MembersContainer countItems={count}>
			{children}
		</MembersContainer>
	</CaseTeamMembersContainer>);
};

export default CaseTeamMembers;