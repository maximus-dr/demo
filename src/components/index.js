import Image from "./Image/ImageView";
import Page from "./Page/PageView";
import Section from "./Section/SectionView";


export const noPropWarning = (prop) => {
    return (
        <span style={{color: 'red'}}>Не задано свойство {prop} !</span>
    );
};


export {
    Image,
    Page,
    Section
}