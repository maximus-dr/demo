import styled, {css} from 'styled-components';
import { SHOW_OUTLINES } from '../../core/config';
import { colors } from '../../core/constants';
import { enableOutlines } from '../../core/utils';


export const ImageBody = styled.img.attrs(props => {
    const styles = props.styles ? props.styles : null
    return ({
        src: props.link ? props.link : '',
        alt: props.alt ? props.alt : '',
        width: styles && styles.width ? styles.width : '100%',
        height: styles && styles.height ? styles.height : 'auto'  
    })
})`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_image)}
    display: block;
    
    ${props => {
        const styles = props.styles ? props.styles : null;

        return css`
            align-self: ${styles && styles.alignSelf || ''};

            width: ${styles && styles.width || '100%'};
            height: ${styles && styles.height || 'auto'};

            margin-top: ${styles && styles.marginTop || '0'};
            margin-right: ${styles && styles.marginRight || '0'};
            margin-bottom: ${styles && styles.marginBottom || '0'};
            margin-left: ${styles && styles.marginLeft || '0'};
        `
    }}

`;
