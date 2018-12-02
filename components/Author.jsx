import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import theme from '../styles/theme';

const AuthorBlock = styled.div`
    display: flex;
    align-items: center;
`

const AuthorBlockPhoto = styled.figure`
    width: 5rem;
    height: 5rem;
    border-radius: 100rem;
    overflow: hidden;
    margin-right: 2rem;
`

const AuthorBlockPhotoContent = styled.img`
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
`

const Author = props => {
    const {img, name, title} = props;
    return (
        <AuthorBlock>
            <AuthorBlockPhoto>
                <AuthorBlockPhotoContent src={img} alt="Profile Picture"/>
            </AuthorBlockPhoto>
            <div className="content">
                <h4>{name}</h4>
                <h5>{title}</h5>
            </div>
        </AuthorBlock>
    )

}

export default Author;
