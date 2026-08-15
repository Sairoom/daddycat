import Photo from '../../ui/Photo/Photo';
import Reveal from '../../ui/Reveal/Reveal';
import { GalleryPhoto } from '../../../data/gallery';
import './GalleryGrid.scss';

interface GalleryGridProps {
  photos: GalleryPhoto[];
}

const GalleryGrid = ({ photos }: GalleryGridProps) => (
  <ul className="gallery-grid">
    {photos.map((item) => (
      <Reveal
        as="li"
        key={item.id}
        className={`gallery-grid__cell ${item.wide ? 'gallery-grid__cell--wide' : ''} ${
          item.tall ? 'gallery-grid__cell--tall' : ''
        }`.trim()}
      >
        <Photo src={item.src} alt={item.caption} caption={item.caption} />
      </Reveal>
    ))}
  </ul>
);

export default GalleryGrid;
