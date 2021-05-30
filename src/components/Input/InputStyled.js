import styled, {css} from 'styled-components';
import { getAttrs, getFocusStyles, getStyles } from '../../core/functions/styles';
import {enableOutlines} from '../../core/utils';
import { React } from 'react';
import { colors } from '../../core/variables';

const Input = () => {
    return (
        <Input />
    );
}

export const InputWrapper = styled.div`
    ${props => enableOutlines(props.showOutlines, colors.outline_input)};
    display: flex;
    
    ${props => {
        const styles = getStyles(props.componentData);
        const attrs = getAttrs(props.componentData);
        const type = attrs && attrs.type && attrs.type;

        return css`
            flex-wrap: ${styles && styles.flexWrap || 'wrap'};
            align-items: ${styles && styles.alignItems || ''};
            align-self: ${styles && styles.alignSelf || ''};

            margin-top: ${styles && styles.marginTop || ''};
            margin-right: ${styles && styles.marginRight || ''};
            margin-bottom: ${styles && styles.marginBottom || '10px'};
            margin-left: ${styles && styles.marginLeft || ''};

            ${() => {
                if (type === 'text' || type === 'email' || type === 'password' || type === 'tel') {
                    return css`
                        width: ${styles && styles.width || '190px'};
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

export const InputField = styled.input`

    ${props => {
        const attrs = getAttrs(props.componentData);
        const styles = getStyles(props.componentData);
        const focus = getFocusStyles(props.componentData);
        const type = attrs && attrs.type && attrs.type || 'text';
            
        if (type === 'text' || type === 'email' || type === 'password' || type === 'tel') {
            return css`
                width: 100%;

                padding-top: ${styles && styles.paddingTop || '5px'};
                padding-right: ${styles && styles.paddingRight || '10px'};
                padding-bottom: ${styles && styles.paddingBottom || '5px'};
                padding-left: ${styles && styles.paddingLeft || '10px'};

                border: ${styles && styles.border || '1px solid rgba(0, 0, 0, 0.42)'};
                border-radius: ${styles && styles.borderRadius || '4px'};
                outline: ${styles && styles.outline || 'none'};

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
                width: 100%;
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
