import styled, {css} from 'styled-components';
import { SHOW_OUTLINES } from '../../core/config/config';
import {enableOutlines} from '../../core/utils';

export const InputWrapper = styled.div`
    ${enableOutlines(SHOW_OUTLINES, 'red')};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const InputField = styled.div`
    margin-right: 25px;
    width: 100%;

    & > input {
        width: 100%;
        padding: 5px 10px;
        border: 1px solid rgba(0, 0, 0, 0.42);
        border-radius: 4px;
        outline: none;

        &:focus {
            box-shadow: 0 0 0 1px #1976d2;
        }
    }
`;
