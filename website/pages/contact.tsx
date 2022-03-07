import React from "react";
import {NextPage} from "next";
import MainLayout from "../layout/MainLayout";
import {Button, Container, Heading, InitialContainer, Paragraph} from "@bytecode/ui-library/components";
import { PageIntro } from "@bytecode/ui-library/sections";
import {breakpointNameToPx, responsiveValuesCSS, theme} from "@bytecode/ui-library/utils";
import styled from "styled-components";
import Image from "next/image";
import {AddressBlock, CommunicationBlock} from "@bytecode/ui-library/containers";
import {LongArrow} from "@bytecode/ui-library/icons";

const content = {
	title: "Contact us at Bytecode.",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const Contact: NextPage = () => {
	return (
		<MainLayout content={content}>
			<ContactBody />
		</MainLayout>
	);
};

const workingImageContainerResponsiveCSS = () => {
	const imageHeights = responsiveValuesCSS(
		"height",
		"px",
		breakpointNameToPx({
			xs: 300,
			sm: 400,
			md: 500,
			lg: 400,
			xxl: 500,
		}));
	const imageWidths = responsiveValuesCSS("width", "", breakpointNameToPx({ xs: "100vw", lg: "100%" }));
	const left = responsiveValuesCSS(
		"left",
		"",
		breakpointNameToPx({
			xs: "calc(-50vw + 50%);",
			lg: "32px",
			xl: "48px",
			xxl: "64px"
		}));
	const top = responsiveValuesCSS("top", "px", breakpointNameToPx({ xs: 25, lg: 300}));
	return imageHeights + imageWidths + left + top;
};

const WorkingImageContainer = styled.div`
	${workingImageContainerResponsiveCSS};
	position: relative;
	grid-area: image;
`;

const Intro = () => (
	<InitialContainer>
		<PageIntro
			subtitle="Contact us"
			title="There you are! Let's chat."
			paragraph="Interested in hiring us? Want to join the team?
						Have a chat? Get in touch."
			image={
				(
					<WorkingImageContainer>
						<Image
							src="/images/contact-header-big.png"
							layout="fill"
							alt="Members of Bytecode relaxing"
							objectFit="contain"
						/>
					</WorkingImageContainer>
				)
			}
		/>
	</InitialContainer>
);

const appointmentContainerResponsiveCSS = () => {
	const paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({ xs: 80, lg: 300}));
	const paddingBottom = responsiveValuesCSS("padding-bottom", "px", breakpointNameToPx({ xs: 80, lg: 60}));
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg:"2fr 1fr",
		})
	);
	const gridTemplateAreas = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"meeting\""+
				"\"communication\"",
			lg: "\"meeting communication\""
		})
	);
	return paddingTop + paddingBottom + gridColumns + gridTemplateAreas;
};

const AppointmentContainer = styled(Container)`
	${appointmentContainerResponsiveCSS};
	display: grid;
	grid-template-rows: auto;
`;

const MeetingContainer = styled.div`
	grid-area: meeting;
	display: grid;
`;

const StyledMeetingButton = styled(Button)`
	justify-self: end;
`;

const StyledCommunicationBlock = styled(CommunicationBlock)`
	grid-area: communication;
`;

const Appointment = () => (
	<AppointmentContainer background={theme.colors.colorBrand3}>
		<MeetingContainer>
			<Heading type="h1" text="Book an appointment" color="white" />
			<Paragraph
				text="Do you have an idea you want to tell us about or discuss?
				Please don’t hesitate to book a meeting with as and see what we can do for you or together!"
				color="white"
			/>
			<StyledMeetingButton type="primary" text="Plan a meeting" icon={LongArrow} />
		</MeetingContainer>
		<StyledCommunicationBlock color="white"/>
	</AppointmentContainer>
)

const ContactBody = () => (
	<div>
		<Intro />
		<Appointment />
	</div>
);

export default Contact;