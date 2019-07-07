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
    transition: all 0.4s ease;
    min-width: 10em;
    .thumbnailCTA {
        transition: 0.3s ease all;
        transform: translate(0em, -1em);
        img {
            transition: 0.3s ease all;
        }
    }
    &:hover {
        & > .ThumbnailImg {
            transform: scale(1.02);
        }

        .thumbnailCTA {
            transform: translate(0.3em, -1em);
            img {
                transform: scaleX(1.3);
            }
        }
    }
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
            height: 0.5em;
            margin-left: 0.66em;
        }
    }
`;

const BigThumbnailImg = styled.div`
    background: url('${props => props.img}'), ${theme.colors.secondary};
    background-size: cover;
    height: 35em;
    transition: all 0.3s ease;
   
`;

//  &:after {
//         content: "";
//         background-color: ${theme.colors.primary};
//         width: 100%;
//         height: 100%;
//         position: absolute;
//         top: 0;
//         left: 0;
//     }

const ThumbnailImg = styled.div`
    background: url('${props => props.img}'), ${theme.colors.secondary};
    background-size: cover;
    height: ${props => (props.big ? '50em' : '18em')};
    transition: all 0.5s ease;
`;

const Arrow = styled.img``;

const CaseThumbnail = props => {
    const { big, title, category, description, img, url } = props;
    if (big) {
        return (
            <Col>
                <ThumbnailBase href={url}>
                    <BigThumbnailImg className="ThumbnailImg" img={img} />
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
                <ThumbnailImg className="ThumbnailImg" img={img} />
                <ThumbnailContent>
                    <Subtitle>{category}</Subtitle>
                    <big>
                        <p>{title}</p>
                    </big>
                    <a href={url}>
                        <small className="thumbnailCTA">
                            Learn more{' '}
                            <Arrow
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
