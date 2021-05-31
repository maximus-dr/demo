import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';


const commonStyles = css`${props => {
    const styles = props.styles ? props.styles : null;

    return css`
        ${props => enableOutlines(props.showOutlines, colors.outline_label)}

        position: ${styles && styles.position || 'relative'};
        top: ${styles && styles.top || ''};
        right: ${styles && styles.right || ''};
        bottom: ${styles && styles.bottom || ''};
        left: ${styles && styles.left || ''};

        align-self: ${styles && styles.alignSelf || 'flex-start'}; 

        width: ${styles && styles.width || ''};

        margin-top: ${styles && styles.marginTop || '0'};
        margin-right: ${styles && styles.marginRight || '0'};
        margin-bottom: ${styles && styles.marginBottom || '0'};
        margin-left: ${styles && styles.marginLeft || '0'};

        padding-top: ${styles && styles.paddingTop || '0'};
        padding-right: ${styles && styles.paddingRight || '15px'};
        padding-bottom: ${styles && styles.paddingBottom || '0'};
        padding-left: ${styles && styles.paddingLeft || '15px'};

        text-align: ${styles && styles.textAlign || 'left'};
        font-weight: ${styles && styles.fotnWeight || ''};
        font-style: ${styles && styles.fontStyle || ''};
        line-height: ${styles && styles.lineHeight || '1.6'};

        color: ${styles && styles.color || ''};
        background-color: ${styles && styles.backgroundColor || ''};

        transform: ${styles && styles.transform || ''};
    `;
}}`;


export const LabelSpan = styled.span`
    ${commonStyles}
    ${props => {
        const styles = props.styles ? props.styles : null;
        return css`
            font-size: ${styles && styles.fontSize || 'medium'};
            line-height: ${styles && styles.lineHeight || 'normal'};
        `
    }}
`;

export const LabelH1 = styled.h1`
    ${commonStyles}
    ${props => {
        const styles = props.styles ? props.styles : null;
        return css`
            font-size: ${styles && styles.fontSize || '32px'};
        `
    }}
    
`;

export const LabelH2 = styled.h2`
    ${commonStyles}
    ${props => {
        const styles = props.styles ? props.styles : null;
        return css`
            font-size: ${styles && styles.fontSize || '24px'};
        `
    }}
`;

export const LabelH3 = styled.h3`
    ${commonStyles}
    ${props => {
        const styles = props.styles ? props.styles : null;
        return css`
            font-size: ${styles && styles.fontSize || '19px'};
        `
    }}
`;

export const LabelH4 = styled.h4`
    ${commonStyles}
    ${props => {
        const styles = props.styles ? props.styles : null;
        return css`
            font-size: ${styles && styles.fontSize || ''};
        `
    }}
`;

export const LabelH5 = styled.h5`
    ${commonStyles}
    ${props => {
        const styles = props.styles ? props.styles : null;
        return css`
            font-size: ${styles && styles.fontSize || ''};
        `
    }}
`;

export const LabelH6 = styled.h6`
    ${commonStyles}
    ${props => {
        const styles = props.styles ? props.styles : null;
        return css`
            font-size: ${styles && styles.fontSize || ''};
        `
    }}
`;

export const Label = styled.label`
    ${commonStyles}
    ${props => {
        const styles = props.styles ? props.styles : null;
        return css`
            font-size: ${styles && styles.fontSize || ''};
        `;
    }}
`;
