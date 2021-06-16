import styled, {css} from 'styled-components';
import { enableOutlines } from '../../core/functions/outlines';
import { colors } from '../../core/variables';

export const IconBody = styled.div`

    ${props => enableOutlines(props.showOutlines, colors.outline_icon)}

    max-height: 100%;
    max-width: 100%;

    ${props => {
        const styles = props.styles ? props.styles : null;
        const transitions = props.styles && props.styles.transitions || null;

        return css`
            position: ${styles && styles.position || 'absolute'};
            top: ${styles && styles.top || ''};
            left: ${styles && styles.left || ''};
            right: ${styles && styles.right || ''};
            bottom: ${styles && styles.bottom || ''};

            width: ${styles && styles.width || '30px'};
            height: ${styles && styles.height || '30px'};
            
            background-repeat: ${styles && styles.backgroundRepeat || 'no-repeat'};
            background-color: ${styles && styles.backgroundColor || ''};
            background-size: ${styles && styles.backgroundSize || '100% auto'};
            background-position-x: ${styles && styles.backgroundPositionX || '50%'};
            background-position-y: ${styles && styles.backgroundPositionY || '50%'};
            background-image: ${styles && styles.backgroundImage || 'none'};

            transform: ${styles && styles.transform || ''};

            cursor: ${styles && styles.cursor || ''};
            opacity: ${styles && styles.opacity || ''};

            transition: ${transitions && transitions.join(', ') || ''};
        `;
    }}

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

    // isActive
    ${props => {
        const styles = props.styles && props.styles.isActive || null;

        return props.isActive && css`
            opacity: ${styles && styles.opacity || ''};

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
