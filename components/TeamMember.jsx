import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const TeamMemberWrapper = styled.div`
    padding: 3rem 0rem 3rem 0rem;
`;

const TeamMemberPhoto = styled.figure`
    margin: 1rem;
    /* border-radius: 100rem; */
    overflow: hidden;
    width: 100%;
    height: auto;
    &::before {
        content: "";
        background: rgba(255,255,255,0.05);
        width: 95%;
        height: 65%;
        top:0em;
        left:.5em;
        margin-left:1%;
        z-index: -1;
        position: absolute;
        display: flex;
        justify-self: center;
        align-self: center;
        margin: ;
        @media screen and (min-width: ${theme.breakpoints[0]}px){
            width: 80%;
            height: 65%;
            margin-left:1%;
        }
        @media screen and (min-width: ${theme.breakpoints[1]}px){

}
        }
    }
`;
const getAltText = (name, alt) => {
    if (alt) {
        return alt;
    }
    return `Een foto van ${name}`;
};
const TeamMember = props => {
    // eslint-disable-next-line
    const { name, title, img, alt, description } = props;

    return (
        <TeamMemberWrapper>
            <TeamMemberPhoto>
                <img src={img} alt={getAltText(name, alt)} />
            </TeamMemberPhoto>
            <h4>{name}</h4>
            <p>{title}</p>
        </TeamMemberWrapper>
    );
};

export default TeamMember;
