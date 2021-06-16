import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';


export const CheckboxWrapper = styled.div`
`;

export const CheckboxLabel = styled.label`
    ${props => enableOutlines(props.showOutlines, colors.outline_checkbox)}
    cursor: pointer;
    width: 100%;
    padding: 0 5px;

    ${props => {
        if (!props.componentData.label) {
            return css`
                font-size: 0;
                width: auto;
                padding: 0;
            `;
        }
    }}
`;

export const CheckboxInput = styled.input`
    margin: 0;
    cursor: pointer;
    width: 13px;
    height: 13px;
`;

export const CheckboxValue = styled.span``;
