import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';


const commonStyles = (styles) => css`
    font-weight: ${styles && styles.fotnWeight || '500'};
    font-family: inherit;

    outline: ${styles && styles.outline || 'none'};
    border: ${styles && styles.border || 'none'};
    border-top: ${styles && styles.borderTop || ''};
    border-right: ${styles && styles.borderRight || ''};
    border-bottom: ${styles && styles.borderBottom || ''};
    border-left: ${styles && styles.borderLeft || ''};
    border-color: ${styles && styles.borderColor || ''};
    border-radius: ${styles && styles.borderRadius || '4px'};

    box-shadow: ${styles && styles.boxShadow || '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'};

    transform: ${styles && styles.transform || ''}; 
`;


// для :hover и :active задается свой styles, соответствующий содержимому props.styles.hover и props.styles.active
export const ButtonBody = styled.button`

    ${props => {
        const styles = props.styles ? props.styles : null;
        const transitions = styles && styles.transitions && styles.transitions.length ? styles.transitions : null;

        return css`
            ${commonStyles(styles)}
            ${props => enableOutlines(props.showOutlines, colors.outline_button)}

            position: ${styles && styles.position || 'relative'};
            top: ${styles && styles.position || ''};
            right: ${styles && styles.right || ''};
            bottom: ${styles && styles.bottom || ''};
            left: ${styles && styles.left || ''};

            align-self: ${styles && styles.alignSelf || 'flex-start'};

            width: ${styles && styles.width || ''};
            max-width: ${styles && styles.maxWidth || ''};

            margin-top: ${styles && styles.marginTop || '5px'};
            margin-right: ${styles && styles.marginRight || '5px'};
            margin-bottom: ${styles && styles.marginBottom || '5px'};
            margin-left: ${styles && styles.marginLeft || '5px'};

            padding-top: ${styles && styles.paddingTop || '5px'};
            padding-right: ${styles && styles.paddingRight || '15px'};
            padding-bottom: ${styles && styles.paddingBottom || '5px'};
            padding-left: ${styles && styles.paddingLeft || '15px'};

            color: ${styles && styles.color || 'rgba(0, 0, 0, 0.87)'};
            background-color: ${styles && styles.backgroundColor || '#e0e0e0'};
            background-image: ${styles && styles.backgroundImage || ''};
            background-size: ${styles && styles.backgroundSize || ''};
            backgground-position: ${styles && styles.backgroundPosition || ''};
            
            font-size: ${styles && styles.fontSize || '13px'};
            text-align: ${styles && styles.textAlign || 'center'};
            text-transform: ${styles && styles.textTransform || 'uppercase'};

            font-style: ${styles && styles.fontStyle || ''};
            line-height: ${styles && styles.lineHeight || '1.8'};

            cursor: ${styles && styles.cursor || 'pointer'};

            transform: ${styles && styles.transform || ''};
            opacity: ${styles && styles.opacity || ''};
            transition: ${transitions && transitions.join(', ') || 'background-color 200ms, color 200ms, opacity 200ms, transform 200ms'};

            &:hover {
                ${props => {
                    const styles = props.styles && props.styles.hover ? props.styles.hover : null;

                    return css`
                        ${commonStyles(styles)}

                        background-color: ${styles && styles.backgroundColor || 'rgba(0, 0, 0, 0.7)'};
                        color: ${styles && styles.color || '#ffffff'};
                        border-color: ${styles && styles.borderColor || ''};
                        transform: ${styles && styles.transform || ''};
                        opacity: ${styles && styles.opacity || ''};
                    `
                }}
            }

            &:active {
                ${props => {
                    const styles = props.styles && props.styles.active ? props.styles.active : null;

                    return css`
                        ${commonStyles(styles)}
                        background-color: ${styles && styles.backgroundColor || 'rgba(0, 0, 0, 0.7)'};
                        color: ${styles && styles.color || '#ffffff'};
                        border-color: ${styles && styles.borderColor || ''};
                        transform: ${styles && styles.transform || ''};
                        opacity: ${styles && styles.opacity || '0.7'};
                    `;
                }}
            }

            ${props => {
                return props.isActive && css`
                    background: red;
                `;
            }}
        `
    }}
`;