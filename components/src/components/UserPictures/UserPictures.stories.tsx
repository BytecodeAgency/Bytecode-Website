import React from "react";
import styled from "styled-components";
import Button from "../Button";
import UserPicture from "./UserPictures";

export default {
	title: "Button",
	component: Button,
};

const Preview = styled.div`
	display: grid;
	grid-gap: 1em;
`;

export const Primary = () => (
	<Preview>
		<UserPicture color="darkGreen" person="" size={0} shadowPosition="top" />
		<UserPicture color="lightGreen" person="" size={0}  shadowPosition="top"  />
		<UserPicture color="purple" person="" size={0}  shadowPosition="top" />
	</Preview>
);