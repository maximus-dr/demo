import styled, {css} from 'styled-components';


const commonStyles = (styles) => css`

    font-weight: ${styles && styles.fotnWeight || 'bold'};

    outline: ${styles && styles.outline || 'none'};
    border: ${styles && styles.border || '1px solid #000000'};
    border-top: ${styles && styles.borderTop || ''};
    border-right: ${styles && styles.borderRight || ''};
    border-bottom: ${styles && styles.borderBottom || ''};
    border-left: ${styles && styles.borderLeft || ''};
    border-radius: ${styles && styles.borderRadius || '0'};

    box-shadow: ${styles && styles.boxShadow || ''};

    opacity: ${styles && styles.opacity || ''};

    transform: ${styles && styles.transform || ''}; 
`;


// для :hover и :active задается свой styles, соответствующий содержимому props.styles.hover и props.styles.active
export const ButtonBody = styled.button`

    position: relative;
    border: none;
    background: none;

    ${props => {
        const styles = props.styles ? props.styles : null;
        const transitions = styles && styles.transitions && styles.transitions.length ? styles.transitions : null;

        return css`
            ${commonStyles(styles)}

            align-self: ${styles && styles.alignSelf || 'flex-start'};

            width: ${styles && styles.width || ''};
            max-width: ${styles && styles.maxWidth || ''};

            margin-top: ${styles && styles.marginTop || '0'};
            margin-right: ${styles && styles.marginRight || '0'};
            margin-bottom: ${styles && styles.marginBottom || '0'};
            margin-left: ${styles && styles.marginLeft || '0'};

            padding-top: ${styles && styles.paddingTop || '6px'};
            padding-right: ${styles && styles.paddingRight || '16px'};
            padding-bottom: ${styles && styles.paddingBottom || '6px'};
            padding-left: ${styles && styles.paddingLeft || '16px'};

            color: ${styles && styles.color || 'rgba(0, 0, 0, 0.7)'};
            background-color: ${styles && styles.backgroundColor || ''};
            
            font-size: ${styles && styles.fontSize || '14px'};
            text-align: ${styles && styles.textAlign || 'center'};
            text-transform: capitalize;

            font-style: ${styles && styles.fontStyle || ''};
            line-height: ${styles && styles.lineHeight || ''};

            cursor: ${styles && styles.cursor || 'pointer'};

            transition: ${transitions && transitions.join(', ') || ''};

            &:hover {
                ${props => {
                    const styles = props.styles && props.styles.hover ? props.styles.hover : null;

                    return css`
                        background-color: ${styles && styles.backgroundColor || '#000000'};
                        color: ${styles && styles.color || '#ffffff'};

                        ${commonStyles(styles)}
                    `
                }}
            }

            &:active {
                ${props => {
                    const styles = props.styles && props.styles.active ? props.styles.active : null;

                    return css`
                        ${commonStyles(styles)}
                    `;
                }}
            }
        `
    }}
`;