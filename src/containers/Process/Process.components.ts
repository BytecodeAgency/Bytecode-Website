import styled from 'styled-components';
import theme from '../../styles/theme';
import { Col } from '../../lib/Grid';

const { mediaQueryMin } = theme;

const Step = styled(Col)`
    @media (${mediaQueryMin.xs}) {
        margin: 0 2em;
    }
`;

export default Step;