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
    cursor: pointer;
    outline: 1px dashed yellow;
`;

export const DropdownMenu = styled.div`
    position: relative;
    top: 5px;
    left: 5px;
    display: flex;
    flex-direction: column;
    min-width: 10px;

    padding: 10px;
    outline: 1px dashed red;

    text-align: center;
`;

export const DropdownOption = styled.div`
    width: 100%;
    outline: 1px dashed yellowgreen;
    margin-bottom: 10px;
    display: flex;
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