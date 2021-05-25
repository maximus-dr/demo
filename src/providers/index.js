import ImageProvider from './ImageProvider';
import LabelProvider from './Label';
import PageProvider from './PageProvider/index';
import SectionProvider from './SectionProvider';
import TextProvider from './TextProvider';


export const providerByComponentTitle = (title) => {

  switch (title) {
    case 'text':
      return TextProvider;
    case 'label':
      return LabelProvider;
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
