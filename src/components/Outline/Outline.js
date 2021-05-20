import React from 'react'
import { OutlineWrapper } from './OutlineStyled'


// Возвращает случайный цвет в hex-формате, например #FFFFFF
export function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export default function Outline(props) {

    return (
        <>
            {props.enabled
                ? <OutlineWrapper outlineColor={props.outlineColor}>
                    {props.children}
                </OutlineWrapper>
                : <>
                    {props.children}
                </>
            }
        </>
    );
}
