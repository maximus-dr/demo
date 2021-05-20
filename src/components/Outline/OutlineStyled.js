import styled from 'styled-components';


export const OutlineWrapper = styled.div`
    position: relative;
    outline: 2px dashed ${props => props.outlineColor};
    outline-offset: -2px;
`;
