import React from "react";
import type { NextPage } from "next";
import { InitialContainer } from "@bytecode/ui-library/components";
import { CollapsibleText } from "@bytecode/ui-library/containers";
import MainLayout from "layout/MainLayout";

const content = {
	title: "Bytecode",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const Home: NextPage = () => {
	return (
		<MainLayout content={content}>
			<HomeBody />
		</MainLayout>
	);
};

const HomeBody = () => (
	<InitialContainer>
		<CollapsibleText
			title="We want to work with passionate founders who want to 'scratch their own itch'"
			description="Aenean vitae lectus non nulla pulvinar
				imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
				mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
				Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
			color="black"
		/>
	</InitialContainer>
);

export default Home;
