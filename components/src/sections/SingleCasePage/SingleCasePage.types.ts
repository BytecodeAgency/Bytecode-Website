import { ThemeColors } from "../../theme";
import { ReactNode } from "react";

export type CaseIntroProps = {
    title: string;
    subtitle: string;
    text: string;
    image: string;
    logo: string;
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
    screenTwo: string;
}

export type SingleCasePageContent = {
    intro: CaseIntroProps;
    about: AboutProps;
    quote: CaseQuoteProps;
    challenges: SummationBlockProps;
    features: ScreensAndTextProps[];
}