import React from 'react';
import {
    AuthorBlock,
    AuthorBlockPhotoWrapper,
    AuthorBlockPhoto,
    AuthorInfo,
    Name,
    Position,
} from './Author.components';

interface Props {
    img: string;
    name: string;
    title?: string;
}

const Author: React.FC<Props> = ({ img, name, title = '' }) => {
    const image = require(`../../images/img/authors/${img}`);
    return (
        <AuthorBlock>
            <AuthorBlockPhotoWrapper>
                <AuthorBlockPhoto src={image} />
            </AuthorBlockPhotoWrapper>
            <AuthorInfo>
                <Name>{name}</Name>
                <Position>{title}</Position>
            </AuthorInfo>
        </AuthorBlock>
    );
};

export default Author;
