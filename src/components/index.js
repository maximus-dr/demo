import Button from "./Button/ButtonView";
import Description from "./Description/DescriptionView";
import Image from "./Image/ImageView";
import Page from "./Page/PageView";
import Section from "./Section/SectionView";
import Label from "./Label/LabelView";
import Icon from "./Icon/IconView";
import Link from "./Link/LinkView";
import Input from "./Input/InputView";
import Select from "./Select/SelectView";
import Dropdown from './Dropdown/Dropdown';

export const componentByType = (type) => {
    switch(type) {
        case 'input':
            return Input;
        case 'label':
            return Label;
        default:
            return null;
    }
}

export const AnotherInput = (props) => {
    return (
        <div>
            <input type="text" value={props.headerValue} onChange={props.onChange} />
        </div>
    );
}


export {
    Button,
    Description,
    Dropdown,
    Icon,
    Image,
    Input,
    Label,
    Link,
    Page,
    Section,
    Select
}
