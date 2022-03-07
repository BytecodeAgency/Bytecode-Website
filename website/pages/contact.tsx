import React from "react";
import {NextPage} from "next";
import MainLayout from "../layout/MainLayout";
import {InitialContainer} from "@bytecode/ui-library/components";
import { PageIntro } from "@bytecode/ui-library/sections";
import {breakpointNameToPx, responsiveValuesCSS} from "@bytecode/ui-library/utils";
import styled from "styled-components";
import Image from "next/image";

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
	const top = responsiveValuesCSS("top", "px", breakpointNameToPx({ xs: 25, lg: 200}));
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

const ContactBody = () => (
	<div>
		<Intro />
	</div>
);

export default Contact;