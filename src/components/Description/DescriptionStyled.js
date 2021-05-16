import styled, { css } from 'styled-components';

export const DescriptionWrapper = styled.div`
  ${props => props.data.order 
    ? css` order: ${props.data.order};`
    : css`order: 0;`
  }
  ${props => props.data.styles && props.data.styles.marginTop 
    ? css`margin-top: ${props.data.styles.marginTop};`
    : css`margin-top: 15px;`
  }
  ${props => props.data.styles && props.data.styles.marginBottom 
    ? css`margin-bottom: ${props.data.styles.marginBottom};`
    : css`margin-bottom: 15px;`
  }
`;

export const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;

  ${props => props.data.styles && props.data.styles.fontSize
    ? css`font-size: ${props.data.styles.fontSize};`
    : css`font-size: 1.25em;`
  }
  ${props => props.data.styles && props.data.styles.lineHeight
    ? css`line-height: ${props.data.styles.lineHeight};`
    : css`line-height: 1.5em;`
  }
  ${props => props.data.styles && props.data.styles.color
    ? css`color: ${props.data.styles.color};`
    : css`color: inherit;`
  }
`;
