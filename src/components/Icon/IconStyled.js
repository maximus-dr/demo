import styled, {css} from 'styled-components';
import { enableOutlines } from '../../core/utils';
import { colors } from '../../core/variables';

export const IconBody = styled.div`

    ${props => enableOutlines(props.showOutlines, colors.outline_icon)}

    position: absolute;
    max-height: 100%;
    max-width: 100%;

    ${props => {
        const styles = props.styles ? props.styles : null;

        return css`
            top: ${styles && styles.top || '0'};
            left: ${styles && styles.left || '0'};
            right: ${styles && styles.right || ''};
            bottom: ${styles && styles.bottom || ''};

            width: ${styles && styles.width || '30px'};
            height: ${styles && styles.height || '30px'};
            
            background-repeat: ${styles && styles.backgroundRepeat || 'no-repeat'};
            background-color: ${styles && styles.backgroundColor || ''};
            background-size: ${styles && styles.backgroundSize || '100% auto'};
            background-position-x: ${styles && styles.backgroundPositionX || '50%'};
            background-position-y: ${styles && styles.backgroundPositionY || '50%'};
            background-image: ${styles && styles.backgroundImage || 'none'};
        `;
    }}
`;
