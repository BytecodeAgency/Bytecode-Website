/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

export const Checklist = styled.ul`
    margin: 2em 0;
`;

export const CheckListItemBase = styled.li`
    display: flex;
    align-items: center;
    justify-items: left;
    margin: 1.33em 0;
    p {
        margin: 0;
        flex: 1;
    }
    img {
        width: 2rem;
        height: 2rem;
        margin-right: 1.33em;
    }
`;

interface Props {
    children: React.ReactNode;
}

export const CheckListItem: React.FC<Props> = ({ children }) => {
    return (
        <CheckListItemBase>
            <img src={require('../images/icons/ui/check.svg')} alt="- " />
            <p>{children}</p>
        </CheckListItemBase>
    );
};

export const CaseHeader = styled.header`
    background: url('${
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
            (props) => props.img
        }'),
        ${theme.colors.secondary};
    background-size: cover;
    height: 50vh;
    border-radius: 0.5em;
    margin-bottom: 3em;
`;
