import { MeetTheFoundersProps } from "src/sections/HomePage/MeetTheFounders/MeetTheFounders.types";
import { Member } from "../containers";
import { EmployeeName } from "./contentGenerics";
import { DeviceTypes } from "../sections";


// list of all employees
export const employees: Member[] = [
	{
		name: "Jeroen van Steijn",
		jobTitle: "Co-Founder & Developer",
		id: "jeroen",
		about: "Hi, I am Jeroen. I am a co-founder of Bytecode and work mainly as a full-stack developer. My colleagues describe me as sincere and kindhearted. I am a very broadly oriented person with interest in politics, technology, media, (motor) sports and much more. In my spare time, I am either playing soccer, video games such as League of Legends with T’iko, or padel with Nick and Chris.",
		focus: ["Development", "Back-end", "Bussiness Strategy"],
		email: "jeroen@bytecode.nl",
		linkedIn: "https://www.linkedin.com/in/jjvansteijn/",
		github: "https://github.com/JeroenVanSteijn"
	},
	{
		name: "Nick Broekarts",
		jobTitle: "Sales & Marketing",
		id: "nick",
		about: "Hi, I am Nick. I am responsible for marketing and sales. Besides that, I help startups with their strategy and roadmap. My colleagues describe me as social and enthusiastic. When I am not working, I am mostly busy doing volunteer work (teaching what the Bible learns and supporting people). Besides that, I love to have dinner with friends or play sports.",
		focus: ["Sales", "Marketing", "Bussiness Strategy"],
		email: "nick@bytecode.nl",
		linkedIn: "https://www.linkedin.com/in/nickbroekarts/",
	},
	{
		name: "Christiaan Färber",
		jobTitle: "Developer & UX",
		id: "chris",
		about: "Hi, I am Chris. I am a front-end developer and User Experience designer. My colleagues describe me as a go-getter with a big heart. My interest lies in finding good wines and philosophy. During my days off, I love to play with my cat Nietzsche and go to techno parties.",
		focus: ["Development", "UX Design", "Bussiness Strategy"],
		email: "christiaan@bytecode.nl",
	},
	{
		name: "T'iko Alarcón Rivero",
		jobTitle: "Developer",
		id: "tiko",
		about: "Hey I am Tiko a full-stack developer at Bytecode. I’m in my final year of IT at the Hague University of Applied Sciences, " +
			"where I’m currently busy founding my own start-up company with a good friend of mine. I love solving puzzles, coding and design. " +
			"In my free time I go for hikes and ride my roadbike through the dunes.",
		focus: ["Development"],
		email: "tiko@bytecode.nl",
		linkedIn: "https://www.linkedin.com/in/tiko-alarcon-rivero-6722bb18a/",
	},
	{
		name: "Suzanne de Vries",
		jobTitle: "Marketing",
		id: "suzanne",
		about: "Hi, I am Suzanne. I am responsible for marketing/communication and sales. My colleagues describe me as cheerful and caring. My interests lie with psychology, dancing and singing, and I am a huge animal lover.",
		focus: ["Marketing"],
		email: "suzanne@bytecode.nl",
		linkedIn: "https://www.linkedin.com/in/suzanne-de-vries-11b088149/",
	},
	{
		name: "Nietzsche the cat",
		jobTitle: "Sleeping & Cuddling",
		id: "nietzsche",
		about: "Miauw, I am Nietzsche. I am responsible for all the cuddles at Bytecode. The people working at Bytecode are not just my colleagues, but also my close friends! " +
			"My father Christiaan brings me with him now and then, but only when its not to busy so I can sleep and relax when I'm there.",
		focus: ["Sleeping, eating and cuddles"],
	}
];

export const getEmployee = (name: EmployeeName): Member | undefined => (
	employees.find(employee => employee.id === name)
);

export const getEmployees = (names: EmployeeName[]): Member[] => {
	const employeeList: Member[] = [];
	names.forEach(name => {
		const employee = getEmployee(name);
		if (employee !== undefined) {
			employeeList.push(employee);
		}
	});
	return employeeList;
};

export const footerContent = {
	slogan: "What is your challenge or startup idea?",
	email: "hello@bytecode.nl",
	number: "015-2024222",
	office1: {
		name: "The Hague",
		address: "Wilhelmina van Pruisenweg",
		number: "35",
		zipCode: "2595 AN",
		city: "Den Haag",
	},
};

// Object with all links
export const links = {
	linkedin: "https://www.linkedin.com/company/bytecodeagency",
	instagram: "https://www.instagram.com/bytecodeagency/",
	youtube: "https://www.youtube.com/channel/UCpEk0LkS3lo7_Rzf8I2aEeg",
	termsAndConditions: "https://cdn.bytecode.nl/algemene-voorwaarden.pdf",
	privacyPolicy: "/legal/privacy-policy",
	cookiePolicy: "/legal/cookie-policy",
	meetingPlanner: "https://calendly.com/nickbroekarts-bytecode",
	mapsQuery: "https://www.google.com/maps/search/?api=1&query=Bytecode+Digital+Agency+B.V.",
	publicTransportRoute: "https://www.google.com/maps/dir/?api=1&destination=Bytecode+Digital+Agency+B.V.&travelmode=transit",
	autoRoute: "https://www.google.com/maps/dir/?api=1&destination=Bytecode+Digital+Agency+B.V."
};

export type Case = {
	name: string;
	subtitle: string;
	image: string;
	type: DeviceTypes;
} // TODO: add more data for single case pages??

export const cases: Case[] = [
	{
		name: "airchip",
		subtitle: "No more queuing for a drink!",
		image: "airchip__chargeup",
		type: "iphone"
	},
	{
		name: "dearly",
		subtitle: "Support for the loss of your loved one(s)",
		image: "dearly__home",
		type: "iphone"
	},
	{
		name: "STYR",
		subtitle: "Clear organisations and fair rewards",
		image: "styr__dashboard",
		type: "laptop"
	},
	{
		name: "stamps",
		subtitle: "Enabling people to share their medical or health journey",
		image: "stamps__landingpage",
		type: "iphone"
	},
	{
		name: "youngpwr",
		subtitle: "Work(s) for your future",
		image: "youngpwr__articles",
		type: "laptop"
	},
];

export const getRandomCase = (): string => cases[Math.floor(Math.random()*cases.length)].name;


export const MeetTheFoundersData: MeetTheFoundersProps[] = [
	{
		company: "YoungPWR",
		discription: "The platform for all young people from high school to university education. YoungPWR helps young adults to find paid learning projects (clients), a side job, or an internship.",
		founders: [{
			name: "suzanschouten",
			color: "purple",
			shadowPosition: "top",
		}],
		link: "/case/youngpwr"
	},
	{
		company: "Stamps",
		discription: "Facilitates people on their medical or health journey to share their stories with friends, family, and acquaintances. In this way, they can better experience the connecting power of openness and support.",
		founders: [{
			name: "tessvanlogtestijn",
			color: "lightGreen",
			shadowPosition: "bottom",
		},
		{
			name: "pienvanlogtestijn",
			color: "purple",
			shadowPosition: "top",
		}],
		link: "/case/stamps"
	},
	{
		company: "Dearly",
		discription: "A social enterprise that strives to normalize loss and grief and create more social awareness in order to make the transition as a society to a caring community.",
		founders: [{
			name: "pietervanderoest",
			color: "darkGreen",
			shadowPosition: "top",
		},
		{
			name: "quirinewissink",
			color: "purple",
			shadowPosition: "bottom",
		}],
		link: "/case/dearly"
	},
	{
		company: "STYR",
		discription: "Is an organizational consulting firm specialized in organizational design, job evaluation, and rewards.",
		founders: [{
			name: "jankeesvanhasselt",
			color: "darkGreen",
			shadowPosition: "top",
		},
		{
			name: "elkeschulting",
			color: "lightGreen",
			shadowPosition: "bottom",
		},
		{
			name: "annemariegeysen",
			color: "purple",
			shadowPosition: "top",
		}],
		link: "/case/styr"
	},
	{
		company: "AirChip",
		discription: "An app for ordering drinks and snacks via a mobile app at any event or festival. When an order is ready for pickup, users receive a notification.",
		founders: [{
			name: "jantenkate",
			color: "darkGreen",
			shadowPosition: "top",
		},
		{
			name: "danielvandrunen",
			color: "purple",
			shadowPosition: "bottom",
		}],
		link: "/case/airchip"
	},
];

type FrequentlyAskedQuestion = {
	question: string;
	answer: string;
}
export const FrequentlyAskedQuestionsContent: FrequentlyAskedQuestion[] = [
	{
		question: "How much do you charge for a consultation?",
		answer: "The first 2 to 3 consultations are free of charge. During these meetings, " +
			"we want to establish a better understanding of your idea and the phase that you are in. " +
			"We will then give feedback on your startup (idea) and help you to proceed. " +
			"After those meetings, we will bill our hours based on our hourly rate. Our rate is currently 90 euro’s / hour."
	},
	{
		question: "What can I expect of the costs when working with Bytecode?",
		answer: "It depends on the phase that you are in. The costs of building an MVP can be anywhere from 10 to 25.000 euros. " +
			"This is contingent upon the number of functionalities and the technical challenges within them. " +
			"It also relies on how much time we will have to invest in matters such as user research and design. " +
			"We are always in favor of keeping the scope of your MVP small so that you leave enough room in your budget to learn from your MVP and make improvements."
	},
	{
		question: "Where can I find more about your experience working with startups?",
		answer: "See our cases for more information about our startup projects."
	},
	{
		question: "How are you different from a 'normal' software development agency?",
		answer: "The main difference between us and digital agencies is that we focus on helping software startups. " +
			"We have worked with many startup founders and have seen them overcome (or fall victim to) the same pitfalls over and over again. " +
			"Because of that, we can help and guide you to build the right product. With our strategic advice and expertise in building MVPs and software in general, " +
			"we believe that we can fulfill the role of a tech co-founder / interim CTO for many tech startups. " +
			"That is also why we often invest in startups to become co-owner and enhance our collaboration."
	},
	{
		question: "Why do you invest in startups?",
		answer: "To strengthen the partnership that we want to establish with you. " +
			"We want to increase the affordability of creating an MVP, and make investing for investors more attractive. " +
			"It creates a situation in which we are more involved. We can guide you all the way until you want to build an in house tech team. "
	}
];



