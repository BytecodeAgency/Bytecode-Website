import { BoxesType, ShadowPosition } from "src/components/UserPictures/UserPicture.types";

interface MeetTheFoundersProps {
    company: string;
    discription: string;
    founders: Founder[];
}

export interface Founder {
    name: string;
    color: BoxesType;
    shadowPosition: ShadowPosition;
}

export const MeetTheFoundersData: MeetTheFoundersProps[] = [
	{
		company: "YoungPWR",
		discription: "The platform for all young people from high school to university education. YoungPWR helps young adults to find paid learning projects (clients), a side job, or an internship.",
		founders: [{
			name: "suzan",
			color: "purple",
			shadowPosition: "top",
		}]
	},
	{
		company: "Stamps",
		discription: "Facilitates people on their medical or health journey to share their stories with friends, family, and acquaintances. In this way, they can better experience the connecting power of openness and support.",
		founders: [{
			name: "tess",
			color: "lightGreen",
			shadowPosition: "bottom",
		},
		{
			name: "pien",
			color: "purple",
			shadowPosition: "top",
		}]
	},
	{
		company: "Dearly",
		discription: "A social enterprise that strives to normalize loss and grief and create more social awareness in order to make the transition as a society to a caring community.",
		founders: [{
			name: "pieter",
			color: "darkGreen",
			shadowPosition: "top",
		},
		{
			name: "quirine",
			color: "purple",
			shadowPosition: "bottom",
		}]
	},
	{
		company: "STYR",
		discription: "Is an organizational consulting firm specialized in organizational design, job evaluation, and rewards.",
		founders: [{
			name: "jankees",
			color: "darkGreen",
			shadowPosition: "top",
		},
		{
			name: "elke",
			color: "lightGreen",
			shadowPosition: "bottom",
		},
		{
			name: "annemarie",
			color: "purple",
			shadowPosition: "top",
		}]
	},
	{
		company: "Dawny",
		discription: "A platform specifically made to integrate the input of different wearables. Dawny is designed to make the sleep of the very elderly visible through patterns. These patterns can predict the likelihood of (night) falls.",
		founders: [{
			name: "dave",
			color: "darkGreen",
			shadowPosition: "top",
		},
		{
			name: "willy",
			color: "lightGreen",
			shadowPosition: "bottom",
		}]
	},
	{
		company: "AirChip",
		discription: "An app for ordering drinks and snacks via a mobile app at any event or festival. When an order is ready for pickup, users receive a notification.",
		founders: [{
			name: "jan",
			color: "darkGreen",
			shadowPosition: "top",
		},
		{
			name: "daniel",
			color: "purple",
			shadowPosition: "bottom",
		}]
	},


];
