import styled, {css} from 'styled-components';
import { SHOW_OUTLINES } from '../../core/config';
import { colors } from '../../core/constants';


function enableOutlines(isEnabled) {

  return isEnabled 
    ? css`
      position: relative;
      outline: 2px dashed ${colors.outline_page};
      outline-offset: -2px;
    `
    : css``;
};

export const PageBody = styled.div`

  ${enableOutlines(SHOW_OUTLINES, colors.outline_page)}

  display: flex;
  min-height: 100vh;
  width: 100%;

  ${props => props.styles && css`
    flex-direction: ${props.styles.flexDirection || 'column'};
    justify-content: ${props.styles.justifyContent || 'flex-start'};

    padding-top: ${props.styles.paddingTop || '0'};
    padding-right: ${props.styles.paddingRight || '0'};
    padding-bottom: ${props.styles.paddingBottom || '0'};
    padding-left: ${props.styles.paddingLeft || '0'};

    background-color: ${props.styles.backgroundColor || 'transparent'};
    background-image: ${props.styles.backgroundImage || 'none'};
    background-size: cover;
  `}
`;
