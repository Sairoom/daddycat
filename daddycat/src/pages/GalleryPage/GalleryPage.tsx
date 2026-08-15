import PageHero from '../../components/sections/PageHero/PageHero';
import Container from '../../components/ui/Container/Container';
import GalleryGrid from '../../components/sections/GalleryGrid/GalleryGrid';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import { gallery } from '../../data/gallery';
import './GalleryPage.scss';

const GalleryPage = () => (
  <>
    <PageHero
      kicker="интерьер"
      title="Как у нас внутри"
      text="Чёрные стены, латунь и медные трубы, часы с шестерёнками, велюр и очень тёплый свет."
    />

    <Container className="gallery-page">
      <GalleryGrid photos={gallery} />

      <div className="gallery-page__zones">
        <article>
          <h2>Зал с экраном</h2>
          <p>Проектор, мягкие кресла и место для большой компании. Занимаем целиком под праздники.</p>
        </article>
        <article>
          <h2>Диван у часов</h2>
          <p>Кожаный честерфилд под механическим сердцем — самое фотографируемое место кофейни.</p>
        </article>
        <article>
          <h2>Окно с настолками</h2>
          <p>Кресла-мешки, дневной свет и полка с коробками на расстоянии вытянутой руки.</p>
        </article>
      </div>
    </Container>

    <CtaBanner
      title="Заходите посмотреть вживую"
      text="Фото не передаёт запах кофе и звук перемешиваемых карт. Это надо застать."
    />
  </>
);

export default GalleryPage;
