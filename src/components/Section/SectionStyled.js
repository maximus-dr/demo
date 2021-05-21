import styled, {css} from 'styled-components';
import { SHOW_OUTLINES } from '../../core/config';
import { colors } from '../../core/constants';
import { enableOutlines } from '../../core/utils';



export const SectionWrapper = styled.div`
    
    ${enableOutlines(SHOW_OUTLINES, colors.outline_section)}
    
    ${props => props.styles && css`
        width: ${props.styles.width || '100%'};
        height: ${props.styles.height || "auto"};
        min-height: ${props.styles.minHeight || '100px'};

        margin-top: ${props.styles.marginTop || '0'};
        margin-right: ${props.styles.marginRight || '0'};
        margin-bottom: ${props.styles.marginBottom || '0'};
        margin-left: ${props.styles.marginLeft || '0'};

        background-image: ${props.styles.backgroundImage || 'none'};
        background-size: ${props.styles.backgroundSize || 'cover'};
        background-color: ${props.styles.backgroundColor || 'transparent'};

        border: ${props.styles.border || 'none'};
        border-radius: ${props.styles.borderRadius || '0'};
    `}
`;

export const SectionBody = styled.div`
    display: flex;
    background-repeat: no-repeat;

    ${props => props.styles && css`
        flex-direction: ${props.styles.flexDirection || 'flex-row'};
        justify-content: ${props.styles.justifyContent || 'flex-start'};
        flex-wrap: ${props.styles.flexWrap || 'wrap'};

        padding-top: ${props.styles.paddingTop || '0'};
        padding-right: ${props.styles.paddingRight || '0'};
        padding-bottom: ${props.styles.paddingBottom || '0'};
        padding-left: ${props.styles.paddingLeft || '0'};
    `}
`;
