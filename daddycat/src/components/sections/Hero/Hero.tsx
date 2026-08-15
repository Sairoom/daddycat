import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import Photo from '../../ui/Photo/Photo';
import { photo } from '../../../assets/photos';
import { cafe } from '../../../data/info';
import './Hero.scss';

const Hero = () => (
  <section className="hero">
    <Container className="hero__inner">
      <div className="hero__content">
        <span className="hero__kicker">Кофейня и настольные игры</span>
        <h1 className="hero__title">
          Daddy Cat<span className="hero__dot">.</span>
        </h1>
        <p className="hero__text">
          Тёплый свет, медные трубы и кожаный диван под часами. Приходите за чашкой кофе —
          остаётесь обычно на партию.
        </p>

        <div className="hero__actions">
          <Button to="/menu">Меню</Button>
          <Button to="/games" variant="ghost">
            Настольные игры
          </Button>
        </div>

        <p className="hero__address">
          {cafe.city}, {cafe.address} · ежедневно с 9:00
        </p>
      </div>

      <Photo
        src={photo('hall.jpg')}
        alt="Зал кофейни Daddy Cat"
        className="hero__photo"
        priority
      />
    </Container>
  </section>
);

export default Hero;
