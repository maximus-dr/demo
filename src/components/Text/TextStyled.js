import styled, {css} from 'styled-components';
import { SHOW_OUTLINES } from '../../core/config';
import { colors } from '../../core/constants';
import { enableOutlines } from '../../core/utils';


export const TextBody = styled.p`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_text)}
    ${props => {
        const styles = props.styles ? props.styles : null;
        
        return css`
            width: ${styles && styles.width || ''};

            margin-top: ${styles && styles.marginTop || '0'};
            margin-right: ${styles && styles.marginRight || '0'};
            margin-bottom: ${styles && styles.marginBottom || '0'};
            margin-left: ${styles && styles.marginLeft || '0'};

            padding-top: ${styles && styles.paddingTop || '0'};
            padding-right: ${styles && styles.paddingRight || '0'};
            padding-bottom: ${styles && styles.paddingBottom || '0'};
            padding-left: ${styles && styles.paddingLeft || '0'};

            text-align: ${styles && styles.textAlign || 'left'};
            text-indent: ${styles && styles.textIndent || ''};
            font-size: ${styles && styles.fontSize || ''};
            line-height: ${styles && styles.lineHeight || ''};
            font-weight: ${styles && styles.fontWeight || ''};
            font-style: ${styles && styles.fontStyle || ''};

            color: ${styles && styles.color || ''};
        `;
    }}
`;
