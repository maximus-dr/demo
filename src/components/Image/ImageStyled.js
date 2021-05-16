import styled, { css } from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;

  ${props => props.data.order 
    ? css` order: ${props.data.order};`
    : css`order: 0;`
  }
  ${props => props.data.styles && props.data.styles.marginTop 
    ? css`margin-top: ${props.data.styles.marginTop};`
    : css`margin-top: 0;`
  }
  ${props => props.data.styles && props.data.styles.marginBottom 
    ? css`margin-bottom: ${props.data.styles.marginBottom};`
    : css`margin-bottom: 30px;`
  }
`;
