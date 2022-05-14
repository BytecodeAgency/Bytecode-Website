import { ThemeColors } from "../../theme";
import { ReactNode } from "react";
import { UserPictureProps } from "../../components/UserPictures/UserPicture.types";

export enum DeviceTypes {
    laptop = "laptop",
    iphone = "iphone"
}

export type CaseIntroProps = {
    title: string;
    subtitle: string;
    text: string;
    image: DeviceProps;
    color: string;
    logo: Logoprops;
}

export type DeviceProps = {
    url: string;
    type: DeviceTypes;
}


export type Logoprops = {
    url: string;
    width: number;
    height: number;
}

export type CaseAboutProps = {
    expertises: string[];
    deliverables: string[];
};

export type AboutTextProps = {
    introduction: string[];
    clientNeeds: string[];
}

export type AboutProps = {
    bullets: CaseAboutProps;
    text: AboutTextProps;
}

export type CaseQuoteProps = {
    text: string;
};

export type SummationText = {
    title: string;
    text: string;
};
export type SummationBlockProps = {
    title: string;
    titleText: string;
    summationText: SummationText[];
    backgroundColor?: string;
    textColor?: ThemeColors;
    image?: ReactNode;
};

export type ScreensAndTextProps = {
    title: string;
    text: string;
    screenOne: string;
    screenTwo?: string;
}

export type SingleCasePageContent = {
    intro: CaseIntroProps;
    about: AboutProps;
    quote: CaseQuoteProps;
    challenges: SummationBlockProps;
    features: ScreensAndTextProps[];
    members: UserPictureProps[];
}