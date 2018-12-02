import styled from 'styled-components';
import theme from '../styles/theme';
import TextBlock from './TextBlock';
import Author from './Author';

const BlogPostThumbnailWrapper = styled.a`
    background-image: url(${props => props.coverImg});
    background-color: ${theme.colors.primary};
    text-decoration: none;
    padding: 2rem;
    margin: 1rem;
`;

const BlogPostThumbnail = props => {
    const { title, category, readTime, date, url } = props;
    return (
        <BlogPostThumbnailWrapper href={url}>
            <TextBlock title={title} subtitle={category} headingType="h3" />
            <Author
                name="Richard van 't Hof"
                title="Art-director & Front-end Developer"
                img="/static/img/team/Jeroen.png"
            />
            <p>{readTime} read</p>
            <p>{date}</p>
        </BlogPostThumbnailWrapper>
    );
};

export default BlogPostThumbnail;
