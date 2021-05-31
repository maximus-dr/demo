import ButtonProvider from './ButtonProvider';
import DescriptionProvider from './DescriptionProvider';
import IconProvider from './IconProvider/IconProvider';
import ImageProvider from './ImageProvider';
import InputProvider from './InputProvider';
import LabelProvider from './LabelProvider';
import LinkProvider from './LinkProvider';
import PageProvider from './PageProvider/index';
import SectionProvider from './SectionProvider';
import FormProvider from './FormProvider';


export const providerByComponentType = (type) => {
  switch (type) {
    case 'button':
      return ButtonProvider;
    case 'description':
      return DescriptionProvider;
    case 'form':
      return FormProvider;
    case 'input':
      return InputProvider;
    case 'label':
      return LabelProvider;
    case 'link':
      return LinkProvider;
    case 'icon':
      return IconProvider;
    case 'image':
      return ImageProvider;
    case 'page':
      return PageProvider;
    case 'section':
      return SectionProvider;
    default:
      return null
  }
}
