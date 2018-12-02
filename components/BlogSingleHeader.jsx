import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import TextBlock from './TextBlock';
import theme from '../styles/theme';
import Author from '../components/Author';

const HeaderContainer = () => styled.section`
    margin: 5% 5% 5% 5%;
    padding: 2%;
    background-color: $red;
    background-image: ${props => props.coverImg || none};
    @media (min-width: ${theme.breakpointMobileMenu}) {
        margin: 0% 0% 5% 5%;
        padding: 25vh 2% 25vh 5%;
    }
`;

const BlogHeader = props => {
    const {title, category, author, position, authorImg} = props;
    return (

        <HeaderContainer>
            sfdasfsafasfasfasdfasfd
            <Row>
                <Col md={6} lg={4}>
                    <TextBlock subtitle={category} title={title} />
                    <Author>
                        name={author}
                        title={position}
                        img={authorImg}
                    </Author>
                </Col>
            </Row>
        </HeaderContainer>
    );
}

export default BlogHeader;