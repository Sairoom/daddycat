import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Button from '../../ui/Button/Button';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import { gallery } from '../../../data/gallery';
import './GalleryPreview.scss';

const GalleryPreview = () => (
  <section className="gallery-preview">
    <Container>
      <SectionTitle kicker="интерьер" title="Медь, велюр и тёплый свет" />
      {/* Четыре снимка складываются в ровный прямоугольник: широкий + высокий + два обычных */}
      <GalleryGrid photos={gallery.slice(0, 4)} />
      <Button to="/gallery" variant="ghost" className="gallery-preview__more">
        Все фото
      </Button>
    </Container>
  </section>
);

export default GalleryPreview;
