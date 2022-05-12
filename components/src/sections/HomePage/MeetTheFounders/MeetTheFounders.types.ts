import { BoxesType, ShadowPosition } from "src/components/UserPictures/UserPicture.types";

export interface MeetTheFoundersProps {
    company: string;
    discription: string;
    founders: Founder[];
    link: string;
}

export interface Founder {
    name: string;
    color: BoxesType;
    shadowPosition: ShadowPosition;
}
