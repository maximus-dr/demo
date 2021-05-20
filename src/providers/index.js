import PatternInfoProvider from './PatternInfoProvider/index';
import LabelProvider from './LabelProvider/index';
import DescriptionProvider from './DescriptionProvider/index';
import TagProvider from './TagProvider/index';
import ButtonProvider from './ButtonProvider/index';
import ImageProvider from './ImageProvider/index';
import ContainerColumnProvider from './ContainerColumnProvider/index';
import PageProvider from './PageProvider/index';
import SectionProvider from './SectionProvider';


export const providerByComponentTitle = (title) => {

  switch (title) {
    case 'button':
      return ButtonProvider;
    case 'containerColumn':
      return ContainerColumnProvider;
    case 'description':
      return DescriptionProvider;
    case 'image':
      return ImageProvider;
    case 'label':
      return LabelProvider;
    case 'page':
      return PageProvider;
    case 'patternInfo':
      return PatternInfoProvider;
    case 'section':
      return SectionProvider;
    case 'tag':
      return TagProvider;
    default:
      return null
  }
}
