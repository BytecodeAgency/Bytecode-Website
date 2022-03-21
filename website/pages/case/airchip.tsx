import React from "react";
import {NextPage} from "next";
import MainLayout from "../../layout/MainLayout";
import {Container} from "@bytecode/ui-library/components";
import {CaseIntro} from "@bytecode/ui-library/sections";

const content = {
	title: "Airchip | Case",
	metaDescription: "Bytecode helps realize your dream applications"
};

const Airchip: NextPage = () => {
	return (
		<MainLayout content={content}>
			<AirchipBody />
		</MainLayout>
	);
};

const Intro = () => (
	<div>
		<CaseIntro
			title="Barman in your pants"
			subtitle="Airchip"
			text="No more queuing at a festival or event: order and pay via the Airchip app. Known from Dragons Den!"
			image="airchip-header.png"
			logo="airchip-logo.svg"
		/>
	</div>
);

const AirchipBody = () => (
	<div>
		<Intro />
	</div>
);

export default Airchip;