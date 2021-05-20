import styled from 'styled-components';
import { colors } from '../../core/constants';

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  background-color: ${props => props.styles.backgroundColor || 'none'};

  /* для обводки */
  position: relative;
  outline: 2px dashed ${colors.outline_page};
  outline-offset: -2px;
`;
