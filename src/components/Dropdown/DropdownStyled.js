import styled, {css} from 'styled-components';
import { enableOutlines } from '../../core/functions/outlines';
import { colors } from '../../core/variables';


export const DropdownWrapper = styled.div`
    ${props => enableOutlines(props.showOutlines, colors.outline_dropdown)}

    position: relative;
    overflow: visible;
`;

export const HeadTag = styled.div`
    margin-right: 5px;
    padding: 0 5px;
    border: 1px solid gray;
    ${props => {
        return props.multiple && css`
            cursor: pointer;
        `
    }}
`;

export const DropdownMenuWrapper = styled.div`
    z-index: 1;
    position: absolute;
    display: none;

    ${props => {
        return props.isOpen && css`
            display: block;
        `;
    }}
`;

export const DropdownWarning = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    padding: 25px 20px 50px 20px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const DropdownWarningCaption = styled.span`
    color: red;
    margin-bottom: 25px;
    font-size: 16px;
    text-align: center;
`;
