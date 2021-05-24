import ImageProvider from './ImageProvider';
import PageProvider from './PageProvider/index';
import SectionProvider from './SectionProvider';


export const providerByComponentTitle = (title) => {

  switch (title) {
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
