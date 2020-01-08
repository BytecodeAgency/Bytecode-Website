/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../styles/theme';
import { Big } from './Typography';

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

export const CheckListItem = props => {
    const { children } = props;
    return (
        <CheckListItemBase>
            <img src={require('../images/icons/ui/check.svg')} alt="- " />
            <p>
                <Big>{children}</Big>
            </p>
        </CheckListItemBase>
    );
};

CheckListItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export const CaseHeader = styled.header`
    background: url("${props => props.img}"), ${theme.colors.secondary};
    background-size: cover;
    height: 50vh;
    border-radius: 0.5em;
    margin-bottom: 3em;
`;
