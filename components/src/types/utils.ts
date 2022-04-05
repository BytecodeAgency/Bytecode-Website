import { ReactNode } from "react";

// type used for Props that use children
export type WithChildren<P = Record<string, unknown>> = P & { children?: ReactNode };

//type use for Props with that need to be styled later with styled components
export type WithStyle<P = Record<string, unknown>> = P & {className?: string};