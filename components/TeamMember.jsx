import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import TextBlock from './TextBlock';
import theme from '../styles/theme';

const TeamMemberWrapper = styled.div`
    padding: 3rem 0rem 3rem 0rem; 
    text-align: center;
`

const TeamMemberPhoto = styled.figure`
    margin: 1rem;
    border-radius: 100rem;
    overflow: hidden;
    width:100%;
    height:auto;
`
const getAltText = (name, alt) => {
    if(alt){
        return alt;
    }
    return "Een foto van "+ name;
}
export const TeamMember = props => {
    const {
        name,
        title,
        img,
        alt,
        description
    } = props;

    return (
        <TeamMemberWrapper>
            <TeamMemberPhoto>
                <img src={img} alt={getAltText(name, alt)} />
            </TeamMemberPhoto>
            <h4>{name}</h4>
            <h5>{title}</h5>
            <p>{description}</p>
        </TeamMemberWrapper>
    )
}

export default TeamMember;
