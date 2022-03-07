import React from "react";
import {NextPage} from "next";
import MainLayout from "../layout/MainLayout";
import {Button, Container, Heading, InitialContainer, Paragraph, footerContent} from "@bytecode/ui-library/components";
import { PageIntro } from "@bytecode/ui-library/sections";
import {breakpointNameToPx, responsiveValuesCSS, theme} from "@bytecode/ui-library/utils";
import styled from "styled-components";
import Image from "next/image";
import {AddressBlock, CommunicationBlock} from "@bytecode/ui-library/containers";
import {LongArrow} from "@bytecode/ui-library/icons";
import {Train, Cars} from "@bytecode/ui-library/icons";

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
			lg: 500,
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
	const top = responsiveValuesCSS("top", "px", breakpointNameToPx({ xs: 50, lg: 300}));
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
			columnSizes="3fr 5fr"
		/>
	</InitialContainer>
);

const appointmentContainerResponsiveCSS = () => {
	const padding = responsiveValuesCSS(
		"padding",
		"",
		breakpointNameToPx({
			xs: "80px 0 60px 0",
			lg: "400px 50px 60px 50px"
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			md: "1fr 300px",
		})
	);
	const gridTemplateAreas = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"meeting\""+
				"\"button\""+
				"\"communication\"",
			md: "\"meeting communication\"" +
				"\"button .\""
		})
	);
	const columnGap = responsiveValuesCSS("column-gap", "px", breakpointNameToPx({ md: 30, lg:150, xl: 200, xxl: 300 }));
	return padding + gridColumns + gridTemplateAreas + columnGap;
};

const AppointmentContainer = styled(Container)`
	${appointmentContainerResponsiveCSS};
	display: grid;
	grid-template-rows: auto;
`;

const MeetingContainer = styled.div`
	grid-area: meeting;
`;

const StyledMeetingButtonContainer = styled.div`
	grid-area: button;
	padding-bottom: 60px;
	display: grid;
`;

const StyledMeetingButton = styled(Button)`
	justify-self: end;
`;

const styledCommunicationBlockResponsiveCSS = responsiveValuesCSS("justify-self", "", breakpointNameToPx({xs: "start", md: "center"}));
const StyledCommunicationBlock = styled(CommunicationBlock)`
	${styledCommunicationBlockResponsiveCSS};
	grid-area: communication;
	align-self: center;
`;

const Appointment = () => (
	<Container background={theme.colors.colorBrand3}>
		<AppointmentContainer>
			<MeetingContainer>
				<Heading type="h1" text="Book an appointment" color="white" />
				<Paragraph
					text="Do you have an idea you want to tell us about or discuss?
				Please don’t hesitate to book a meeting with as and see what we can do for you or together!"
					color="white"
				/>
			</MeetingContainer>
			<StyledMeetingButtonContainer>
				<StyledMeetingButton type="primary" text="Plan a meeting" icon={LongArrow} />
			</StyledMeetingButtonContainer>
			<StyledCommunicationBlock color="white"/>
		</AppointmentContainer>
	</Container>

);

const addressAndRouteContainerResponsiveCSS = () => {
	const padding = responsiveValuesCSS(
		"padding",
		"",
		breakpointNameToPx({
			xs: "120px 0 120px",
			lg: "220px 50px 220px 50px"
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			md:"1fr 1fr",
		})
	);
	const gridTemplateAreas = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"address\""+
				"\"route\"",
			md: "\"address route\""
		})
	);
	return padding + gridColumns + gridTemplateAreas;
};

const AddressAndRouteContainer = styled(Container)`
	${addressAndRouteContainerResponsiveCSS};
	display: grid;
`;

const StyledAddressBlock = styled(AddressBlock)`
	grid-area: address;
`;

const routeContainerResponsiveCSS = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({xs: 30, md: 0}));
const RouteContainer = styled.div`
	${routeContainerResponsiveCSS};
	grid-area: route;
`;

const StyledRouteButton = styled(Button)`
	width: 215px;
	margin-bottom: 20px;
`;

const AddressAndRoute = () => {
	const {city, address, number} = footerContent.office1;
	const goToPublicTransportRoute = () => {
		window.open("https://www.google.com/maps/dir/?api=1&destination=Bytecode+Digital+Agency+B.V.&travelmode=transit");
	};
	const goToMapsRoute = () => {
		window.open("https://www.google.com/maps/dir/?api=1&destination=Bytecode+Digital+Agency+B.V.");
	};
	return(
		<Container background={theme.colors.colorBrand2}>
			<AddressAndRouteContainer>
				<StyledAddressBlock large/>
				<RouteContainer>
					<Heading type="h3" text="Route"/>
					<Paragraph text="Are you planning to drop by? Let us know and plan here your route!"/>
					<StyledRouteButton type="secondary" text="Public transport" icon={Train} onClick={goToPublicTransportRoute}/>
					<StyledRouteButton type="secondary" text="Plan route" icon={Cars} onClick={goToMapsRoute}/>
				</RouteContainer>
			</AddressAndRouteContainer>
		</Container>

	);
};

const ContactBody = () => (
	<div>
		<Intro />
		<Appointment />
		<AddressAndRoute />
	</div>
);

export default Contact;