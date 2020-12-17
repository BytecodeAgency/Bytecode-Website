import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const { colors } = theme;
const { secondary } = colors;

const CreditsBase = styled.section`
    background: ${secondary};
    padding: 15vh 15vw;
    columns: 3;
    p {
        margin: 0em 0;
        padding: 0;
        .subtitle {
            margin-bottom: 1em;
        }
    }
`;

interface MetaProps {
    title: string;
    content?: string;
}

const Meta: React.FC<MetaProps> = ({
    title,
    content = 'No data available',
}) => {
    const addContent = (entries: any) => {
        if (typeof entries !== 'string') {
            const elements = entries.map((entry: any) => {
                return <p key={entry.id}>{entry}</p>;
            });
            return elements;
        }
        return <p>{entries}</p>;
    };
    return (
        <div>
            <p className="subtitle">{title}</p>
            {addContent(content)}
        </div>
    );
};

type CreditsProps = {
    client: string,
    year: string,
    medium: string[],
    contributors: string[],
    links: {
        [key: string]: string,
    },
    copyright: string,
};

const Credits = ({
    client,
    year,
    medium,
    contributors,
    links,
    copyright,
}: CreditsProps) => {
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CreditsBase>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Meta title="Client" content={client} />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Meta title="Jaar" content={year} />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Meta title="Disciplines" content={medium} />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Meta title="Contributors" content={contributors} />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Meta title="Recources" content={links} />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p className="caption">
                {copyright ||
                    '© 2020 Bytecode Digital Agency B.V. All Rights Reserved on text and image content. Information is this section might not be true.'}
            </p>
        </CreditsBase>
    );
};

export default Credits;
