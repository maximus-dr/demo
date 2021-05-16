import styled, { css } from 'styled-components';

export const ContainerColumnWrapper = styled.div`
  ${props => props.data.order 
    ? css` order: ${props.data.order};`
    : css`order: 0;`
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 30px;
`;

export const ContainerColumnBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
