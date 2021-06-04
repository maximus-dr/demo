import styled, {css} from 'styled-components';
import { getAttrs, getFocusStyles, getHoverStyles, getStyles, getTransitions } from '../../core/functions/styles';
import {enableOutlines} from '../../core/functions/outlines';
import { React } from 'react';
import { colors } from '../../core/variables';


export const InputWrapper = styled.div`
    ${props => enableOutlines(props.showOutlines, colors.outline_input)};
    display: flex;
    width: 100%;
    ${props => {
        const styles = getStyles(props.componentData);
        const attrs = getAttrs(props.componentData);
        const type = attrs && attrs.type && attrs.type;

        return css`
            flex-wrap: ${styles && styles.flexWrap || 'wrap'};
            flex-direction: ${styles && styles.flexDirection || ''};
            justify-content: ${styles && styles.justifyContent || ''};
            align-items: ${styles && styles.alignItems || ''};
            align-self: ${styles && styles.alignSelf || ''};
            

            margin-top: ${styles && styles.marginTop || ''};
            margin-right: ${styles && styles.marginRight || ''};
            margin-bottom: ${styles && styles.marginBottom || '10px'};
            margin-left: ${styles && styles.marginLeft || ''};

            cursor: ${styles && styles.cursor || ''};

            ${() => {
                if (type === 'text' || type === 'email' || type === 'password' || type === 'tel') {
                    return css`
                        width: ${styles && styles.width || ''};
                    `;
                }
        
                if (type === 'checkbox') {
                    return css`
                        
                    `;
                }
            }}
        `;
    }}
`;

export const Input = styled.input`

    ${props => {
        const styles = getStyles(props.componentData);
        const transitions = getTransitions(props.componentData);

        return css`
            cursor: ${styles && styles.cursor || ''};
            transition: ${transitions && transitions.join(', ') || 'background-color 200ms, border-color 50ms'};
        `;
    }}

    ${props => {
        const attrs = getAttrs(props.componentData);
        const styles = getStyles(props.componentData);
        const hover = getHoverStyles(props.componentData);
        const focus = getFocusStyles(props.componentData);
        const type = attrs && attrs.type && attrs.type || 'text';
            
        if (type === 'text' || type === 'email' || type === 'password' || type === 'tel') {
            return css`
                width: ${styles && styles.width || '100%'};

                padding-top: ${styles && styles.paddingTop || '5px'};
                padding-right: ${styles && styles.paddingRight || '10px'};
                padding-bottom: ${styles && styles.paddingBottom || '5px'};
                padding-left: ${styles && styles.paddingLeft || '10px'};

                border: ${styles && styles.border || '1px solid rgba(0, 0, 0, 0.42)'};
                border-radius: ${styles && styles.borderRadius || '4px'};
                outline: ${styles && styles.outline || 'none'};

                &:hover {
                    border-color: ${hover && hover.borderColor || 'rgba(0, 0, 0, 0.87)'};
                }

                &:focus {
                    border-color: ${focus && focus.borderColor || '#1976d2'};
                }
            `;
        }

        if (type === 'checkbox') {
            return css`
                cursor: pointer;
            `;
        }

        if (type === 'radio') {
            return css`
                cursor: pointer;
            `;
        }

        if (type === 'submit') {
            return css`
                width: ${styles && styles.width || ''};

                padding-top: ${styles && styles.paddingTop || '5px'};
                padding-right: ${styles && styles.paddingRight || '10px'};
                padding-bottom: ${styles && styles.paddingBottom || '5px'};
                padding-left: ${styles && styles.paddingLeft || '10px'};

                font-weight: ${styles && styles || ''};
                color: ${styles && styles || 'rgba(0,0,0,0.87)'};
                text-transform: uppercase;
                font-size: 13px;
                line-height: 1.8;

                background-color: rgb(239, 239, 239);

                border: ${styles && styles.border || '1px solid #e0e0e0'};
                border-radius: ${styles && styles.borderRadius || '4px'};
                outline: ${styles && styles.outline || 'none'};

                cursor: ${styles && styles.cursor || 'pointer'};

                &:hover {
                    background-color: rgba(0,0,0,0.1);
                    border-color: rgba(0, 0, 0, 0.2);
                }

                &:active {
                    background-color: rgba(0, 0, 0, 0.2);
                }
            `;
        }
    }}
`;

export const InputLabel = styled.label`
    ${props => {
        const styles = getStyles(props.componentData);

        return css`
            user-select: none;

            margin-top: ${styles && styles.marginTop || ''};
            margin-right: ${styles && styles.marginRight || ''};
            margin-bottom: ${styles && styles.marginBottom || ''};
            margin-left: ${styles && styles.marginLeft || '7px'};

            font-size: ${styles && styles.fontSize || ''};
            line-height: ${styles && styles.lineHeight || ''};
            font-weight: ${styles && styles.fotnWeight || ''};
            font-style: ${styles && styles.fontStyle || ''};
            text-transform: ${styles && styles.textTransform || ''};

            color: ${styles && styles.color || ''};
            cursor: ${styles && styles.cursor || ''};
        `;
    }}
`;
