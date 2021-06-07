import styled, {css} from 'styled-components';


export const DropdownWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    outline: 1px dashed blue;
`;

export const DropdownHead = styled.div`
    position: relative;
    padding: 5px 15px;
    padding-right: 40px;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    outline: 1px dashed yellow;
    cursor: pointer;
`;

export const DropdownOption = styled.div`
    outline: 1px dashed yellowgreen;
    margin-bottom: 10px;
    display: flex;
`;

export const HeadCaption = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    width: 100%;
`;

export const HeadIcon = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    height: 100%;
    width: 30px;
    background: #cccccc;

    & > img {

    }
`;

export const HeadItem = styled.div`
    border: 1px solid gray;
`;

export const DropdownMenu = styled.div`
    position: absolute;
    top: 45px;
    left: 5px;
    display: flex;
    flex-direction: column;
    min-width: 100px;

    padding: 10px;
    outline: 1px dashed red;

    text-align: center;

    display: none;
    ${props => {
        return props.isOpen && css`
            display: block
        `; 
    }}
`;

export const Clear = styled.button`

`;

export const Item = styled.div`
    border: '1px solid gray';
    cursor: auto;
`;