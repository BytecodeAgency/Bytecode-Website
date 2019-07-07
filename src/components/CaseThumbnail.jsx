import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import theme from '../styles/theme';
import TextBlock from './TextBlock';
import { Col } from '../lib/Grid';

const SubtitleBase = ({ className, children }) => (
    <div className={`subtitle ${className}`}>{children}</div>
);
const Subtitle = styled(SubtitleBase)`
    margin-bottom: 0.66rem;
`;

const ThumbnailBase = styled.a`
    background-color: ${theme.colors.secondary};
    padding-bottom: 2em;
    cursor: pointer;
`;

const ThumbnailContent = styled.div`
    padding: 1.33em;
    big {
        p {
            margin-bottom: 1em;
        }
    }
    small {
        display: hidden;
        @media (min-width: ${theme.breakpoints[2]}px) {
            display: block;
            margin: 1.66em 0em;
        }

        img {
            width: 2em;
            margin-left: 0.66em;
        }
    }
`;

const BigThumbnailImg = styled.div`
    background: url('${props => props.img}'), ${theme.colors.secondary};
    background-size: cover;
    height: 35em;
`;

const ThumbnailImg = styled.div`
    background: url('${props => props.img}'), ${theme.colors.secondary};
    background-size: cover;
    height: ${props => (props.big ? '50em' : '18em')};
`;

const CaseThumbnail = props => {
    const { big, title, category, description, img, url } = props;
    if (big) {
        return (
            <Col>
                <ThumbnailBase href={url}>
                    <BigThumbnailImg />
                    <ThumbnailContent>
                        <Subtitle>{category}</Subtitle>
                        <h5>{title}</h5>
                    </ThumbnailContent>
                </ThumbnailBase>
            </Col>
        );
    }
    return (
        <Col md={4}>
            <ThumbnailBase href={url}>
                <ThumbnailImg />
                <ThumbnailContent>
                    <Subtitle>{category}</Subtitle>
                    <big>
                        <p>{title}</p>
                    </big>
                    <a href={url}>
                        <small>
                            Learn more{' '}
                            <img
                                src={require('../images/icons/ui/arrow.svg')}
                                alt=" >"
                            />
                        </small>
                    </a>
                </ThumbnailContent>
            </ThumbnailBase>
        </Col>
    );
};

export default CaseThumbnail;
