import { css } from 'styled-components';


// добавляет обводку компонентам
export function enableOutlines(isEnabled, color) {
  return isEnabled 
    ? css`
      position: relative;
      outline: 2px dashed ${color};
      outline-offset: -2px;
    `
    : css``;
};
