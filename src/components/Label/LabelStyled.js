import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';


const commonStyles = css`${props => {
    const styles = props.styles ? props.styles : null;
    const transitions = styles && styles.transitions && styles.transitions.length ? styles.transitions : null;

    return css`
        ${props => enableOutlines(props.showOutlines, colors.outline_label)}

        position: ${styles && styles.position || 'relative'};
        top: ${styles && styles.top || ''};
        right: ${styles && styles.right || ''};
        bottom: ${styles && styles.bottom || ''};
        left: ${styles && styles.left || ''};

        display: ${styles && styles.display || ''};

        align-self: ${styles && styles.alignSelf || ''}; 

        width: ${styles && styles.width || ''};

        margin-top: ${styles && styles.marginTop || '0'};
        margin-right: ${styles && styles.marginRight || '0'};
        margin-bottom: ${styles && styles.marginBottom || '0'};
        margin-left: ${styles && styles.marginLeft || '0'};

        padding-top: ${styles && styles.paddingTop || '0'};
        padding-right: ${styles && styles.paddingRight || '15px'};
        padding-bottom: ${styles && styles.paddingBottom || '0'};
        padding-left: ${styles && styles.paddingLeft || '15px'};

        border: ${styles && styles.border || ''};
        border-top: ${styles && styles.borderTop || ''};
        border-right: ${styles && styles.borderRight || ''};
        border-bottom: ${styles && styles.borderBottom || ''};
        border-left: ${styles && styles.borderLeft || ''};

        text-align: ${styles && styles.textAlign || 'left'};
        text-transform: ${styles && styles.textTransform || ''};
        text-decoration: ${styles && styles.textDecoration || ''};
        font-weight: ${styles && styles.fotnWeight || ''};
        font-style: ${styles && styles.fontStyle || ''};
        line-height: ${styles && styles.lineHeight || '1.6'};

        color: ${styles && styles.color || ''};
        background-color: ${styles && styles.backgroundColor || ''};

        transform: ${styles && styles.transform || ''};
        cursor: ${styles && styles.cursor || ''};

        transition: ${transitions && transitions.join(', ') || ''};

        &:hover {
            ${props => {
                const styles = props.styles && props.styles.hover ? props.styles.hover : null;

                return css`
                    background-color: ${styles && styles.backgroundColor || ''};
                    color: ${styles && styles.color || ''};
                    border-color: ${styles && styles.borderColor || ''};
                    transform: ${styles && styles.transform || ''};
                    opacity: ${styles && styles.opacity || ''};
                    box-shadow: ${styles && styles.boxShadow || ''};
                `
            }}
        }

        &:active {
            ${props => {
                const styles = props.styles && props.styles.active ? props.styles.active : null;

                return css`
                    background-color: ${styles && styles.backgroundColor || ''};
                    color: ${styles && styles.color || ''};
                    border-color: ${styles && styles.borderColor || ''};
                    transform: ${styles && styles.transform || ''};
                    opacity: ${styles && styles.opacity || ''};
                `;
            }}
        }

        &:before {
            ${props => {
                const styles = props.styles && props.styles.before || null;

                return css`
                    z-index: ${styles && styles.zIndex || ''};
                    content: ${styles && styles.content || `''`};

                    position: ${styles && styles.position || 'absolute'};
                    top: ${styles && styles.top || '0'};
                    right: ${styles && styles.right || ''};
                    bottom: ${styles && styles.bottom || ''};
                    left: ${styles && styles.left || '0'};

                    width: ${styles && styles.width || ''};
                    height: ${styles && styles.height || ''};

                    background-color: ${styles && styles.backgroundColor || ''};
                    box-shadow: ${styles && styles.boxShadow || ''};
                `;
            }}
        }

        &:after {
            ${props => {
                const styles = props.styles && props.styles.after || null;

                return css`
                    z-index: ${styles && styles.zIndex || ''};
                    content: ${styles && styles.content || `''`};

                    position: ${styles && styles.position || 'absolute'};
                    top: ${styles && styles.top || ''};
                    right: ${styles && styles.right || ''};
                    bottom: ${styles && styles.bottom || '0'};
                    left: ${styles && styles.left || '0'};
                    width: ${styles && styles.width || ''};
                    height: ${styles && styles.height || ''};

                    background-color: ${styles && styles.backgroundColor || ''};
                    box-shadow: ${styles && styles.boxShadow || ''};
                `;
            }}
        }

        ${'' /* isActive */}
        ${props => {
            const styles = props.styles && props.styles.isActive || null;

            return props.isActive && css`
                color: ${styles && styles.color || ''};

                &:hover {
                    ${props => {
                        const styles = props.styles && props.styles.isActive && props.styles.isActive.hover || null;

                        return css`
                            background-color: ${styles && styles.backgroundColor || ''};
                            color: ${styles && styles.color || ''};
                            border-color: ${styles && styles.borderColor || ''};
                            transform: ${styles && styles.transform || ''};
                            opacity: ${styles && styles.opacity || ''};
                            box-shadow: ${styles && styles.boxShadow || ''};
                            cursor: ${styles && styles.cursor || ''};
                        `
                    }}
                }

                &:active {
                    ${props => {
                        const styles = props.styles && props.styles.isActive && props.styles.isActive.active || null;

                        return css`
                            background-color: ${styles && styles.backgroundColor || ''};
                            color: ${styles && styles.color || ''};
                            border-color: ${styles && styles.borderColor || ''};
                            transform: ${styles && styles.transform || ''};
                            opacity: ${styles && styles.opacity || ''};
                        `;
                    }}
                }

                &:after {
                    ${props => {
                        const styles = props.styles && props.styles.isActive && props.styles.isActive.after || null;
                        const transitions = props.styles && props.styles.isActive && props.styles.isActive.after && props.styles.isActive.after.transitions || null;

                        return css`
                                z-index: ${styles && styles.zIndex || ''};
                                content: ${styles && styles.content || `''`};

                                position: ${styles && styles.position || 'absolute'};
                                top: ${styles && styles.top || ''};
                                right: ${styles && styles.right || ''};
                                bottom: ${styles && styles.bottom || ''};
                                left: ${styles && styles.left || ''};
                                width: ${styles && styles.width || ''};
                                height: ${styles && styles.height || ''};

                                background-color: ${styles && styles.backgroundColor || ''};
                                box-shadow: ${styles && styles.boxShadow || ''};

                                transition: ${transitions && transitions.join(', ') || ''};
                        `;
                    }}
                }

                &:before {
                    ${props => {
                        const styles = props.styles && props.styles.isActive && props.styles.isActive.before || null;
                        const transitions = props.styles && props.styles.isActive && props.styles.isActive.before && props.styles.isActive.before.transitions || null;

                        return css`
                            z-index: ${styles && styles.zIndex || ''};
                            content: ${styles && styles.content || `''`};

                            position: ${styles && styles.position || 'absolute'};
                            top: ${styles && styles.top || ''};
                            right: ${styles && styles.right || ''};
                            bottom: ${styles && styles.bottom || ''};
                            left: ${styles && styles.left || ''};

                            width: ${styles && styles.width || ''};
                            height: ${styles && styles.height || ''};

                            background-color: ${styles && styles.backgroundColor || ''};
                            box-shadow: ${styles && styles.boxShadow || ''};

                            transition: ${transitions && transitions.join(', ') || ''};
                        `;
                    }}
                }
            `;
        }}
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

export const InputLabel = styled.label`
    ${commonStyles}
    ${props => {
        const styles = props.styles ? props.styles : null;
        return css`
            font-size: ${styles && styles.fontSize || ''};
        `;
    }}
`;
