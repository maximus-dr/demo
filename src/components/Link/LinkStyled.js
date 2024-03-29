import styled, {css} from 'styled-components';
import { getActiveStyles, getHoverStyles, getStyles, getTransitions } from '../../core/functions/styles';
import { enableOutlines } from '../../core/functions/outlines';
import { colors } from '../../core/variables';


const wrapperCommonStyles = (styles) => css`

    border: ${styles && styles.border || ''};
    border-top: ${styles && styles.borderTop || ''};
    border-right: ${styles && styles.borderRight || ''};
    border-bottom: ${styles && styles.borderBottom || ''};
    border-left: ${styles && styles.borderLeft || ''};
    border-color: ${styles && styles.borderColor || ''};
    border-radius: ${styles && styles.borderRadius || ''};

    outline: ${styles && styles.outline || ''};
    outline-offset: ${styles && styles.outlineStyle || ''};   

    background-color: ${styles && styles.backgroundColor || ''};
    background-image: ${styles && styles.backgroundImage || ''};
    background-repeat: no-repeat;
    background-size: ${styles && styles.backgroundSize || '28px auto'};
    background-position: ${styles && styles.backgroundPosition || '10px 50%'};

    cursor: ${styles && styles.cursor || ''};

    box-shadow: ${styles && styles.boxShadow || ''};
    opacity: ${styles && styles.opacity || ''};
    transform: ${styles && styles.transform || ''};
`;

const bodyCommonStyles = (styles) => css`
    width: ${styles && styles.width || ''};
    height: ${styles && styles.height || ''};

    padding-top: ${styles && styles.paddingTop || ''};
    padding-right: ${styles && styles.paddingRight || ''};
    padding-bottom: ${styles && styles.paddingBottom || ''};
    padding-left: ${styles && styles.paddingLeft || ''};

    text-decoration: ${styles && styles.textDecoration || 'underline'};

    font-weight: ${styles && styles.fontWeight || ''};

    color: ${styles && styles.color || '#1976d2'};
`;


export const LinkWrapper = styled.div`
    ${props => {
        const styles = getStyles(props);
        const transitions = getTransitions(props);

        return css`
            ${props => enableOutlines(props.showOutlines, colors.outline_link)}
            ${wrapperCommonStyles(styles)}

            position: ${styles && styles.position || 'relative'};
            align-self: ${styles && styles.alignSelf || ''};
            margin-top: ${styles && styles.marginTop || '5px'};
            margin-right: ${styles && styles.marginRight || '5px'};
            margin-bottom: ${styles && styles.marginBottom || '5px'};
            margin-left: ${styles && styles.marginLeft || '5px'};
            transition: ${transitions && transitions.join(', ') || ''};
            font-size: 0;
            line-height: 0;

            &:hover {
                ${props => {
                    const styles = getHoverStyles(props);
                    return css`
                        ${wrapperCommonStyles(styles)}
                    `
                }}
            }

            &:active {
                ${props => {
                    const styles = getActiveStyles(props);
                    return css`
                        ${wrapperCommonStyles(styles)}
                    `;
                }}
            }
        `
    }}
`;


export const LinkBody = styled.span`
    ${props => {
        const styles = getStyles(props);
        const transitions = getTransitions(props);

        return css`
            ${bodyCommonStyles(styles)}
            display: ${styles && styles.display || 'inline-block'};

            text-align: ${styles && styles.textAlign || ''};
            text-transform: ${styles && styles.textTransform || ''};

            font-size: ${styles && styles.fontSize || '14px'};
            font-style: ${styles && styles.fontStyle || ''};
            line-height: ${styles && styles.lineHeight || '1.8'};

            transition: ${transitions && transitions.join(', ') || ''};

            &:hover {
                ${props => {
                    const styles = getHoverStyles(props);
                    return css`
                        ${bodyCommonStyles(styles)}
                    `;
                }}
            }

            &:active {
                ${props => {
                    const styles = getActiveStyles(props);
                    return css`
                        ${bodyCommonStyles(styles)}
                    `;
                }}
            }
        `
    }}
`;