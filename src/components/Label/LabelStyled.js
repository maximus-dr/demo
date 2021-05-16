import styled, { css } from 'styled-components';

export const LabelWrapper = styled.div`
  margin: 0;
  width: 100%;
  ${props => props.data.order 
    ? css`order: ${props.data.order};`
    : css`order: 0;`
  }
  ${props => props.data.styles && props.data.styles.marginTop 
    ? css`margin-top: ${props.data.styles.marginTop};`
    : css`margin-top: 0;`
  }
  ${props => props.data.styles && props.data.styles.marginBottom 
    ? css`margin-bottom: ${props.data.styles.marginBottom};`
    : css`margin-bottom: 15px;`
  }
`;

export const LabelText = styled.h2`
  padding: 0;
  margin: 0;
  ${props => props.data.styles && props.data.styles.fontSize
    ? css`font-size: ${props.data.styles.fontSize};`
    : css`font-size: 36px;`
  }
  ${props => props.data.styles && props.data.styles.lineHeight
    ? css`line-height: ${props.data.styles.lineHeight};`
    : css`line-height: 42px;`
  }
  ${props => props.data.styles && props.data.styles.color
    ? css`color: ${props.data.styles.color};`
    : css`color: inherit;`
  }
`;
