import styled, {css} from 'styled-components';

export const ImageWrapper = styled.div`

`;

export const ImageBody = styled.img.attrs(props => {
    const styles = props && props.styles ? props.styles : null;

    return ({
        src: props && props.link ? props.link : '',
        width: styles ? styles.width : '200px',
        height: styles ? props.styles.height : 'auto'
    })
})`
    margin-top: ${props => {
        return css``
    }}

`;
