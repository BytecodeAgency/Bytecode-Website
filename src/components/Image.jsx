import React from 'react';

const Image = props => {
    const { src, alt } = props;
    const image = require(`../images/img/articles/${src}`);
    return <img src={image} alt={alt} />;
};

export default Image;
