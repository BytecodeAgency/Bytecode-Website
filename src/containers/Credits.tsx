import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
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

type OwnMetaProps = {
    title: string,
    content?: string,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'MetaProps' circularly references itsel... Remove this comment to see the full error message
type MetaProps = OwnMetaProps & typeof Meta.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'Meta' implicitly has type 'any' because it does n... Remove this comment to see the full error message
const Meta = ({ title, content }: MetaProps) => {
    const addContent = (entries: any) => {
        if (typeof entries !== 'string') {
            const elements = entries.map((entry: any) => {
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                return <p key={entry.id}>{entry}</p>;
            });
            return elements;
        }
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <p>{entries}</p>;
    };
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

Meta.defaultProps = {
    content: 'No data availible',
};
