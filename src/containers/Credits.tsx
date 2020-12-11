import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const Meta = ({ title, content }) => {
    const addContent = entries => {
        if (typeof entries !== 'string') {
            const elements = entries.map(entry => {
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

const Credits = ({ client, year, medium, contributors, links, copyright }) => {
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

Meta.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
};

Meta.defaultProps = {
    content: 'No data availible',
};

Credits.propTypes = {
    client: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    medium: PropTypes.arrayOf(PropTypes.string).isRequired,
    contributors: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.objectOf(PropTypes.string).isRequired,
    copyright: PropTypes.string.isRequired,
};
