import {ReactNode} from "react";

// type used for Props that use children
export type WithChildren<P = {}> = P & { children?: ReactNode };