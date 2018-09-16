import React from 'react';
import styled from 'styled-components';
import { height } from 'window-size';

const Div = styled.div`
        width: 20vw;
        height: 20vw;
        background-image: url(./static/img/content/interior.png);
        background-size: cover;
        background-blend-mode: multiply;
        background-color: #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

const Icon = styled.figure`
        width: 7.5vw;
        height: 7.5vw;
    `

export class IconThumbnail extends React.Component {
    
    

    render(){
        return (
            <Div>
                <Icon>
                    <img src="/static/icons/services/api.svg" alt="APIs"/>
                </Icon>
            </Div>
        )
    }
}