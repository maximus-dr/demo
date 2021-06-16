import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';
import { getStyles } from '../../core/functions/styles';


export const SectionWrapper = styled.div`

    ${props => enableOutlines(props.showOutlines, colors.outline_section)}
    
    ${props => {
        const styles = getStyles(props.componentData);
        const transitions = props.componentData.styles && props.componentData.styles.transitions || null;

        return css`
            position: ${styles && styles.position || 'relative'};
            top: ${styles && styles.top || ''};
            right: ${styles && styles.right || ''};
            bottom: ${styles && styles.bottom || ''};
            left: ${styles && styles.left || ''};
            z-index: ${styles && styles.zIndex || ''};

            align-self: ${styles && styles.alignSelf || ''};

            width: ${styles && styles.width || ''};
            min-width: ${styles && styles.minWidth || '100px'};

            margin-top: ${styles && styles.marginTop || '0'};
            margin-right: ${styles && styles.marginRight || '0'};
            margin-bottom: ${styles && styles.marginBottom || '0'};
            margin-left: ${styles && styles.marginLeft || '0'};

            outline: ${styles && styles.outline || ''};
            border: ${styles && styles.border || 'none'};
            border-top: ${styles && styles.borderTop || ''};
            border-right: ${styles && styles.borderRight || ''};
            border-bottom: ${styles && styles.borderBottom || ''};
            border-left: ${styles && styles.borderLeft || ''};
            border-radius: ${styles && styles.borderRadius || ''};

            color: ${styles && styles.color || ''};

            opacity: ${styles && styles.opacity || ''};
            box-shadow: ${styles && styles.boxShadow || ''};
            overflow: ${styles && styles.overflow || 'hidden'};

            cursor: ${styles && styles.cursor || ''};
            transition: ${transitions && transitions.join(', ') || ''};

            &:hover {
                ${props => {
                    const styles = props.componentData.styles && props.componentData.styles.hover ? props.componentData.styles.hover : null;

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
                    const styles = props.componentData.styles && props.componentData.styles.active ? props.componentData.styles.active : null;

                    return css`
                        background-color: ${styles && styles.backgroundColor || ''};
                        color: ${styles && styles.color || ''};
                        border-color: ${styles && styles.borderColor || ''};
                        transform: ${styles && styles.transform || ''};
                        opacity: ${styles && styles.opacity || ''};
                    `;
                }}
            }

            ${'' /* isActive */}
            ${props => {
                const styles = props.componentData.styles && props.componentData.styles.isActive || null;

                return props.isActive && css`
                    color: ${styles && styles.color || ''};
                    background-color: ${styles && styles.backgroundColor || 'rgba(0, 0, 0, 0.2)'};

                    &:hover {
                        ${props => {
                            const styles = props.styles && props.styles.isActive && props.styles.isActive.hover || null;

                            return css`
                                background-color: ${styles && styles.backgroundColor || 'rgba(0, 0, 0, 0.2)'};
                                color: ${styles && styles.color || ''};
                                border-color: ${styles && styles.borderColor || ''};
                                transform: ${styles && styles.transform || ''};
                                opacity: ${styles && styles.opacity || ''};
                                box-shadow: ${styles && styles.boxShadow || ''};
                                cursor: ${styles && styles.cursor || 'default'};
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

            flex-direction: ${styles && styles.flexDirection || 'column'};
            justify-content: ${styles && styles.justifyContent || 'flex-start'};
            flex-wrap: ${styles && styles.flexWrap || 'nowrap'};
            align-items: ${styles && styles.alignItems || 'flex-start'};
            column-gap: ${styles && styles.columnGap || ''};

            height: ${styles && styles.height || "auto"};
            min-height: ${styles && styles.minHeight || '30px'};

            padding-top: ${styles && styles.paddingTop || '10px'};
            padding-right: ${styles && styles.paddingRight || '10px'};
            padding-bottom: ${styles && styles.paddingBottom || '10px'};
            padding-left: ${styles && styles.paddingLeft || '10px'};

            border-radius: ${styles && styles.borderRadius || ''};

            background-color: ${styles && styles.overlay || ''};
            background-image: ${styles && styles.overlayImage || ''};

            text-align: ${styles && styles.textAlign || ''};

            opacity: ${styles && styles.overlayOpacity || ''};
        `
    }}
`;
