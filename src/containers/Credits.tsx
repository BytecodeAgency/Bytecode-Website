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
        <CreditsBase>
            <Meta title="Client" content={client} />

            <Meta title="Jaar" content={year} />

            <Meta title="Disciplines" content={medium} />

            <Meta title="Contributors" content={contributors} />

            <Meta title="Recources" content={links} />

            <p className="caption">
                {copyright ||
                    '© 2020 Bytecode Digital Agency B.V. All Rights Reserved on text and image content. Information is this section might not be true.'}
            </p>
        </CreditsBase>
    );
};

export default Credits;
