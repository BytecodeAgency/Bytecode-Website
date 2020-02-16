import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const { colors, mediaQueryMin, containerWidth } = theme;
const { secondary } = colors;

const CreditsBase = styled.section`
    background: ${secondary};
    padding: 20vh 15vw;
`;

const Meta = ({title, content}) => {
    const addContent = (entries) => {
        if (typeof entries != 'string') {
            console.log(entries);
            const elements = entries.map((entry, i)=>{
                return (
                    <p key={i}>{entry}</p>
                )
            })
            return elements;
        } else {
            return <p>{entries}</p>;
        }
    }
    return (
        <div>
            <p class="subtitle">{title}</p>
            {addContent(content)}
        </div>
    )
};

const Credits = ({ client, year, medium, contributors, recourses, copyright }) => {
    return (
       <CreditsBase>
           <Meta
                title="Client"
                content="Reinier de Graaf ziekehuis"
           />
           <Meta
                title="Jaar"
                content="2019"
           />
           <Meta
                title="Disciplines"
                content={['graphic design', 'strategy', 'seo']}
           />
           <Meta
                title="Strategy"
                content={["richard", "jos"]}
           />
           <p class="caption">© 2020 Bytecode Digital Agency B.V.
All Rights Reserved on text and image content. Information is this section might not be true.</p>

       </CreditsBase>
    );

};

export default Credits;
