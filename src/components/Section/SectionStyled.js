import styled from 'styled-components';
import { colors } from '../../core/constants';


export const SectionWrapper = styled.div`
    margin: ${props => props.styles.margin || '0'};
    padding: ${props => props.styles.padding || '0'};
    width: ${props => props.styles.width || '100%'};
    min-height: ${props => props.styles.minHeight || '100px'};
    margin-top: ${props => props.styles.marginTop || '0'};
    margin-right: ${props => props.styles.marginRight || '0'};
    

    /* для обводки */
    position: relative;
    outline: 2px dashed ${colors.outline_section};
    outline-offset: -2px;
`;
