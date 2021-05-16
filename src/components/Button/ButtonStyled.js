import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 100%;
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

export const ButtonLink = styled.a`
  text-decoration: none;
  font-size: inherit;
  color: inherit;
`;

export const ButtonBody = styled.button`
  outline: none;
  border: none;
  user-select: none;
  box-shadow: 0 0 0 2px #d40754 inset;
  border-radius: 22px;
  padding: 13px 30px;
  background: none;
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #d40754;
  }

  ${props => props.data.styles && props.data.styles.fontSize
    ? css`font-size: ${props.data.styles.fontSize};`
    : css`font-size: 16px;`
  }
  ${props => props.data.styles && props.data.styles.lineHeight
    ? css`line-height: ${props.data.styles.lineHeight};`
    : css`line-height: 18px;`
  }
  ${props => props.data.styles && props.data.styles.color
    ? css`color: ${props.data.styles.color};`
    : css`color: #ffffff;`
  }
`;
