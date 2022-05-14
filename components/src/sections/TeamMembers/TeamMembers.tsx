import React from "react";
import { Member, TeamMember } from "../../containers";
import { breakpointNameToPx,  responsiveValuesCSS } from "../../helpers";
import styled from "styled-components";
import { Heading, Paragraph, Subtitle, Container, Spacer } from "../../components";

const teamMembersContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 1fr"
		}));
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			xs:0,
			lg: 80,
			xl: 140,
		})
	);
	const paddingRight = responsiveValuesCSS(
		"padding-right",
		"px",
		breakpointNameToPx({
			xs: 12,
			md: 24,
			lg: 0
		})
	);
	const columnGap = responsiveValuesCSS(
		"grid-column-gap",
		"px",
		breakpointNameToPx({
			md: 50,
			xl: 80
		})
	);
	return gridColumns + paddingTop + paddingRight + columnGap;
};
const TeamMembersContainer = styled.div`
	${teamMembersContainerResponsiveCSS};
	display: grid;
	position: relative;
`;

const teamMembersSpacerResponsiveCSS = () => {
	const display = responsiveValuesCSS("display", "", breakpointNameToPx({ lg: "none" }));
	return display;
};
const TeamMembersSpacer = styled(Spacer)`
	${teamMembersSpacerResponsiveCSS};
	margin-top: 80px;
`;

const teamMembersLeftColumnResponsiveCSS = responsiveValuesCSS(
	"padding",
	"",
	breakpointNameToPx({
		xs: "0",
		lg: "0 30px",
		xl: "0 50px",
		xxl: "0 60px"
	}));
const TeamMembersLeftColumn = styled.div`
	${teamMembersLeftColumnResponsiveCSS};
	position: relative;
`;
const teamMembersRightColumnResponsiveCSS = responsiveValuesCSS(
	"grid-template-columns",
	"" ,
	breakpointNameToPx({
		xs: "1fr",
		md: "1fr 1fr",
	})
);
const TeamMembersRightColumn = styled.div`
	${teamMembersRightColumnResponsiveCSS};
	display: grid;
	justify-items: center;
	grid-column-gap: 20px;
`;
const StyledMembersSubtitle = styled(Subtitle)`
	margin-top: 50px;
`;
const StyledMembersParagraph = styled(Paragraph)`
	margin-top: 10px;
	margin-bottom: 10px;
`;
const Sticky = styled.div`
	position: sticky;
	top: 120px;
`;

type TeamMembersProps = {
    members: Member[];
}

const TeamMembers = ({ members }: TeamMembersProps) => (
	<Container>
		<TeamMembersSpacer reverse/>
		<TeamMembersContainer>
			<TeamMembersLeftColumn>
				<Sticky>
					<StyledMembersSubtitle text="The people that make it happen"/>
					<Heading type="h2" text="Meet the team members" />
					<StyledMembersParagraph
						text="If you want to realize your dream, you need to have a good team. That is why our team consists of experienced developers,
							designers, strategists, and marketers who love to join your startup project.
							Who are the people responsible for building the product of your dreams that fits your customers?"
					/>
				</Sticky>
			</TeamMembersLeftColumn>
			<TeamMembersRightColumn>
				{members.map((member, index)=><TeamMember key={index} member={member}/>)}
			</TeamMembersRightColumn>
		</TeamMembersContainer>
	</Container>
);

export default TeamMembers;