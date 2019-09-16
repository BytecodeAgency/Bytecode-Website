import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';
import TextBlock from '../TextBlock/TextBlock';

const { mediaQueryMin } = theme;

const Icon = styled.img`
    margin-top: 2em;
    margin-bottom: 0;
    padding: 0 !important;
    @media (${mediaQueryMin.sm}) {
        max-height: 10rem;
        margin-top: 3em;
        margin-left: 0;
        padding: 0.1em;
    }
`;

const ServiceWrapper = styled.div`
    min-height: 10em;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1em 0;
    @media (${mediaQueryMin.xs}) {
        flex-direction: row;
    }
    @media (${mediaQueryMin.md}) {
        padding: 0 6em 1em 0;
        flex-basis: ${props => (props.fullWidth ? '100%' : '50%')};
    }
`;

const ServiceIcon = styled.div`
    margin: 0 3em 0 0;
    transform: translateY(0.1em);
    flex-basis: 25%;
    width: 20%;
    @media (${mediaQueryMin.sm}) {
        margin: 0 3em 0 0;
        min-height: 100%;
        flex-basis: 25%;
        width: 20%;
    }
    @media (${mediaQueryMin.md}) {
        flex-basis: 15%;
        min-width: 15%;
    }
`;

const Service = ({ children, iconName, title, fullWidth }) => {
    const iconSrc = require(`../../images/icons/services/${iconName}.svg`);
    return (
        <ServiceWrapper fullWidth={fullWidth}>
            <ServiceIcon>
                <Icon src={iconSrc} alt={iconName} />
            </ServiceIcon>
            <div>
                <TextBlock title={title} headingType="h3">
                    {children}
                </TextBlock>
            </div>
        </ServiceWrapper>
    );
};

export default Service;

Service.propTypes = {
    children: PropTypes.node.isRequired,
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
};

Service.defaultProps = {
    fullWidth: false,
};
