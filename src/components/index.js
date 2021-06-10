import Button from "./Button/ButtonView";
import Description from "./Description/DescriptionView";
import Image from "./Image/ImageView";
import Page from "./Page/PageView";
import Section from "./Section/SectionView";
import Label from "./Label/LabelView";
import Icon from "./Icon/IconView";
import Link from "./Link/LinkView";
import Input from "./Input/InputView";
import Dropdown from './Dropdown/Dropdown';
import Tab from "./Tab/Tab";


export const Provider = {
    'button': Button,
    'description': Description,
    'dropdown': Dropdown,
    'icon': Icon,
    'image': Image,
    'input': Input,
    'label': Label,
    'link': Link,
    'page': Page,
    'section': Section,
    'tab': Tab
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
    Section
}
