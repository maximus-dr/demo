import styled, {css} from 'styled-components';
import { SHOW_OUTLINES } from '../../core/config';
import { colors } from '../../core/constants';
import { enableOutlines } from '../../core/utils';


const commonStyles = css`${props => {
    const styles = props.styles ? props.styles : null;

    return css`
        margin-top: ${styles && styles.marginTop || '0'};
        margin-right: ${styles && styles.marginRight || '0'};
        margin-bottom: ${styles && styles.marginBottom || '0'};
        margin-left: ${styles && styles.marginLeft || '0'};

        padding-top: ${styles && styles.paddingTop || '0'};
        padding-right: ${styles && styles.paddingRight || '0'};
        padding-bottom: ${styles && styles.paddingBottom || '0'};
        padding-left: ${styles && styles.paddingLeft || '0'};

        text-align: ${styles && styles.textAlign || 'left'};
        font-size: ${styles && styles.fontSize || ''};
        line-height: ${styles && styles.lineHeight || ''};
        font-weight: ${styles && styles.fotnWeight || ''};
        font-style: ${styles && styles.fontStyle || ''};

        color: ${styles && styles.color || ''};
    `;
}}`;


export const LabelSpan = styled.span`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_label)}
    ${commonStyles}
`;

export const LabelH1 = styled.h1`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_label)}
    ${commonStyles}
`;

export const LabelH2 = styled.h2`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_label)}
    ${commonStyles}
`;

export const LabelH3 = styled.h3`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_label)}
    ${commonStyles}
`;

export const LabelH4 = styled.h4`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_label)}
    ${commonStyles}
`;

export const LabelH5 = styled.h5`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_label)}
    ${commonStyles}
`;

export const LabelH6 = styled.h6`
    ${enableOutlines(SHOW_OUTLINES, colors.outline_label)}
    ${commonStyles}
`;

export const LabelWarning = styled.span`
    font-size: 12px;
    color: red;
`;