import styled, {css} from 'styled-components';
import { enableOutlines } from '../../core/functions/outlines';

export const SelectWrapper = styled.div`
    ${props => {
        return css`
            ${enableOutlines(props.showOutlines, 'blue')}
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 200px;
        `;
    }}
`;

export const SelectLabel = styled.label`
    color: black;
`;

export const SelectBody = styled.select`
    height: auto;
    width: 120px;
    max-width: 100%;

    padding: 5px;
    padding-left: 15px;

    font-size: 14px;
    line-height: 1.6;
    
    color: black;

    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;

    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);

    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;

    appearance: none;
    cursor: pointer;

    &:hover {
        border-color: #888;
    }

    &:focus {
        box-shadow: 0 0 1px 1px rgba(59, 153, 252, .7);
        color: #222;
    }
`;

export const SelectOption = styled.option`
    & *[dir="rtl"] select, :root:lang(ar) select, :root:lang(iw) select {
        background-position: left .7em top 50%, 0 0; 
        padding: .6em .8em .5em 1.4em; 
    }
    
`;