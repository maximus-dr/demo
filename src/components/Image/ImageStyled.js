import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';

export const ImageWrapper = styled.div`
    ${props => enableOutlines(props.showOutlines, colors.outline_image)}
    ${props => {
        const styles = props.styles ? props.styles : null;

        return css`
            position: ${styles && styles.position || 'relative'};
            align-self: ${styles && styles.alignSelf || 'flex-start'};

            width: ${styles && styles.width || '100%'};
            height: ${styles && styles.height || 'auto'};

            margin-top: ${styles && styles.marginTop || '0'};
            margin-right: ${styles && styles.marginRight || '0'};
            margin-bottom: ${styles && styles.marginBottom || '0'};
            margin-left: ${styles && styles.marginLeft || '0'};

            cursor: ${styles && styles.cursor || ''};

            ${props => {
                return props.isActive && css`
                    outline: 4px solid red;
                `;
            }}
        `
    }}
`;

export const ImageBody = styled.img.attrs(props => {
    const styles = props.styles ? props.styles : null
    return ({
        src: props.link ? props.link : '',
        alt: props.alt ? props.alt : '',
        width: styles && styles.width ? styles.width : '100%',
        height: styles && styles.height ? styles.height : 'auto'
    })
})`
    display: block;
    
    ${props => {
        const styles = props.styles ? props.styles : null;

        return css`
            width: 100%;
        `
    }}
`;
