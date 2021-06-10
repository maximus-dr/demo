import styled, {css} from 'styled-components';
import { enableOutlines } from '../../core/functions/outlines';

export const RadioWrapper = styled.div`
    ${props => enableOutlines(props.showOutlines, 'red')}
`;

export const RadioBody = styled.input``;

export const RadioLabel = styled.label``;

export const RadioBox = styled.div`
    width: 15px;
    height: 15px;
    border: 2px solid red;
    border-radius: 50%;
`;