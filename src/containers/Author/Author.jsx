import React from 'react';
import PropTypes from 'prop-types';
import { AuthorBlock, AuthorBlockPhoto } from './Author.components';

const Author = props => {
    const { img, name, title } = props;
    const image = require(`../../images/img/authors/${img}`);
    return (
        <AuthorBlock>
            <AuthorBlockPhoto src={image} />
            <div className="content">
                <h6>{name}</h6>
                <p>{title}</p>
            </div>
        </AuthorBlock>
    );
};

export default Author;

Author.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
