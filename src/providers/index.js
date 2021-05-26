import ButtonProvider from './Button';
import DescriptionProvider from './DescriptionProvider';
import IconProvider from './Icon/IconProvider';
import ImageProvider from './ImageProvider';
import LabelProvider from './Label';
import PageProvider from './PageProvider/index';
import SectionProvider from './SectionProvider';


export const providerByComponentType = (type) => {
  switch (type) {
    case 'button':
      return ButtonProvider;
    case 'description':
      return DescriptionProvider;
    case 'label':
      return LabelProvider;
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
