import styled, { css } from 'styled-components';

export const ContainerWrapper = styled.div`
  position: relative;
  overflow: hidden;

  ${props => props.data.order 
    ? css` order: ${props.data.order};`
    : css`order: 0;`
  }
`;

export const ContainerBackground = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: none;
  background-image: url(https://portal.silverscreen.by:8448/meadiaStorage/imgsite/img/belWebakcia.png);
  filter: blur(20px);

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    ${props => props.data.styles && props.data.styles.backgroundColor
      ? css`background-color: ${props.data.styles.backgroundColor};`
      : css`background-color: rgba(0, 0, 0, 0.7);`
    }
  }

  &:before {
    content: '';
  }

  ${props => props.data.styles && props.data.styles.filter
    ? css`filter: ${props.data.styles.filter};`
    : css`filter: blur(20px);`
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  text-align: start;
  position: relative;
  padding: 70px 30px;
`;
