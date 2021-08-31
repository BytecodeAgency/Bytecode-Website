import styled from 'styled-components';
import Button from '../../components/Button/Button';

export const CenteredRow = styled.div`
    text-align: center;
`;

export const StyledRow = styled.div`
    display: grid;
    grid-template-columns: 3fr 5fr;
    max-width: 1400px;
    margin: auto;
    margin-top: 10px;
    background: rgb(37, 28, 36);
`;

export const LeftInner = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 80px;
    max-width: 90%;
`;

export const Left = styled.div`
    position: relative;
`;

export const Right = styled.div``;

export const StyledButton = styled(Button)`
    width: 450px;
    padding: 10px;
`;
