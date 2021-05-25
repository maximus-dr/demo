import styled, {css} from 'styled-components';
import { SHOW_OUTLINES } from '../../core/config';
import { colors } from '../../core/constants';
import { enableOutlines } from '../../core/utils';



export const SectionWrapper = styled.div`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_section)}
    
    ${props => {
        const styles = props.styles ? props.styles : null;

        return css`
            width: ${styles && styles.width || '100%'};
            height: ${styles && styles.height || "auto"};
            min-height: ${styles && styles.minHeight || '50px'};
            min-width: ${styles && styles.minWidth || '50px'};

            margin-top: ${styles && styles.marginTop || '0'};
            margin-right: ${styles && styles.marginRight || '0'};
            margin-bottom: ${styles && styles.marginBottom || '0'};
            margin-left: ${styles && styles.marginLeft || '0'};

            background-image: ${styles && styles.backgroundImage || 'none'};
            background-size: ${styles && styles.backgroundSize || 'cover'};
            background-color: ${styles && styles.backgroundColor || 'transparent'};

            border: ${styles && styles.border || 'none'};
            border-radius: ${styles && styles.borderRadius || '0'};
        `
    }}
`;

export const SectionBody = styled.div`
    display: flex;
    background-repeat: no-repeat;

    ${props => {
        const styles = props.styles ? props.styles : null;

        return css`
            flex-direction: ${styles && styles.flexDirection || 'column'};
            justify-content: ${styles && styles.justifyContent || 'flex-start'};
            flex-wrap: ${styles && styles.flexWrap || 'nowrap'};

            width: ${styles && styles.width || '100%'};
            height: ${styles && styles.height || "auto"};
            min-height: ${styles && styles.minHeight || '50px'};
            min-width: ${styles && styles.minWidth || '50px'};

            padding-top: ${styles && styles.paddingTop || '0'};
            padding-right: ${styles && styles.paddingRight || '0'};
            padding-bottom: ${styles && styles.paddingBottom || '0'};
            padding-left: ${styles && styles.paddingLeft || '0'};
        `
    }}
`;
