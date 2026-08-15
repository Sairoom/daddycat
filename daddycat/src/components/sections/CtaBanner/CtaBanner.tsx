import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import { cafe } from '../../../data/info';
import './CtaBanner.scss';

interface CtaBannerProps {
  title?: string;
  text?: string;
}

const CtaBanner = ({
  title = 'Заходите на чашку кофе',
  text = 'Столы никто не бронирует — просто приходите. По вечерам свободнее после девяти.',
}: CtaBannerProps) => (
  <section className="cta">
    <Container className="cta__inner">
      <div>
        <h2 className="cta__title">{title}</h2>
        <p className="cta__text">{text}</p>
      </div>

      <div className="cta__actions">
        <Button to="/contacts">Как нас найти</Button>
        <Button href={`tel:${cafe.phoneHref}`} variant="ghost">
          {cafe.phone}
        </Button>
      </div>
    </Container>
  </section>
);

export default CtaBanner;
