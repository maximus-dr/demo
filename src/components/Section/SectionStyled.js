import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';
import { getStyles } from '../../core/functions/styles';


export const SectionWrapper = styled.div`

    ${props => enableOutlines(props.showOutlines, colors.outline_section)}
    
    ${props => {
        const styles = getStyles(props.componentData);

        return css`
            align-self: ${styles && styles.alignSelf || ''};

            width: ${styles && styles.width || '100%'};
            min-width: ${styles && styles.minWidth || '50px'};

            margin-top: ${styles && styles.marginTop || '0'};
            margin-right: ${styles && styles.marginRight || '0'};
            margin-bottom: ${styles && styles.marginBottom || '0'};
            margin-left: ${styles && styles.marginLeft || '0'};

            border: ${styles && styles.border || 'none'};
            border-top: ${styles && styles.borderTop || ''};
            border-right: ${styles && styles.borderRight || ''};
            border-bottom: ${styles && styles.borderBottom || ''};
            border-left: ${styles && styles.borderLeft || ''};
            border-radius: ${styles && styles.borderRadius || ''};

            box-shadow: ${styles && styles.boxShadow || '0'};
            overflow: ${styles && styles.overflow || 'hidden'};
        `
    }}
`;

export const SectionBackground = styled.div`
    width: 100%;
    height: 100%;

    ${props => {
        const styles = getStyles(props.componentData);
        return css`
            border-radius: ${styles && styles.borderRadius || ''};
            background-image: ${styles && styles.backgroundImage || 'none'};
            background-size: ${styles && styles.backgroundSize || 'cover'};
            background-color: ${styles && styles.backgroundColor || 'transparent'};
            filter: ${styles && styles.filter || ''};
        `;
    }}
`;

export const SectionBody = styled.div`

    background-repeat: no-repeat;
    width: 100%;

    ${props => {
        const styles = getStyles(props.componentData);

        return css`
            display: ${styles && styles.display || 'flex'};
            position: ${styles && styles.position || 'relative'};

            flex-direction: ${styles && styles.flexDirection || 'column'};
            justify-content: ${styles && styles.justifyContent || 'flex-start'};
            flex-wrap: ${styles && styles.flexWrap || 'nowrap'};
            align-items: ${styles && styles.alignItems || 'flex-start'};

            height: ${styles && styles.height || "auto"};
            min-height: ${styles && styles.minHeight || '100px'};

            padding-top: ${styles && styles.paddingTop || '10px'};
            padding-right: ${styles && styles.paddingRight || '10px'};
            padding-bottom: ${styles && styles.paddingBottom || '10px'};
            padding-left: ${styles && styles.paddingLeft || '10px'};

            border-radius: ${styles && styles.borderRadius || ''};

            background-color: ${styles && styles.overlay || ''};
            background-image: ${styles && styles.overlayImage || ''};

            opacity: ${styles && styles.overlayOpacity || ''};
        `
    }}
`;
