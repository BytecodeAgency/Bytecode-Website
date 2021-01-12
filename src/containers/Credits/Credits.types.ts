type ColumnData = {
    title: string;
    content: string[];
};

export default interface CreditsProps {
    special: string[];
    resources: string[];
    resourceLinks: string[];
    columnOne: ColumnData[];
    columnTwo: ColumnData[];
}

export interface CreditItemProps {
    title: string;
    credits: string[];
}

export interface CreditItemWithLinksProps {
    title: string;
    credits: string[];
    links: string[];
}
