import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';


export const PageBody = styled.div`

  ${props => enableOutlines(props.showOutlines, colors.outline_page)}

  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;

  ${props => {
    const styles = props.styles ? props.styles : null;

    return css`
      flex-direction: ${styles && styles.flexDirection || 'column'};
      justify-content: ${styles && styles.justifyContent || 'flex-start'};

      padding-top: ${styles && styles.paddingTop || '0'};
      padding-right: ${styles && styles.paddingRight || '0'};
      padding-bottom: ${styles && styles.paddingBottom || '0'};
      padding-left: ${styles && styles.paddingLeft || '0'};

      background-color: ${styles && styles.backgroundColor || '#f5f5f5'};
      background-image: ${styles && styles.backgroundImage || 'none'};
      background-size: ${styles && styles.backgroundSize || 'cover'};
    `
  }}
`;
