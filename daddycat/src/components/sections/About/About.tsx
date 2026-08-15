import Container from '../../ui/Container/Container';
import Photo from '../../ui/Photo/Photo';
import Reveal from '../../ui/Reveal/Reveal';
import { photo } from '../../../assets/photos';
import './About.scss';

const About = () => (
  <section className="about">
    <Container className="about__inner">
      <Reveal className="about__media">
        <Photo
          src={photo('steampunk-wall.jpg')}
          alt="Медные трубы и латунный кот на стене"
        />
      </Reveal>

      <Reveal className="about__content" delay={150}>
        <h2>Кофейня, из которой не хочется уходить</h2>
        <p>
          Чёрные стены, латунные трубы и часы с настоящими шестерёнками. За соседним столом
          раскладывают «Эволюцию», у окна греется кресло-мешок, над рейками горит янтарная вывеска.
        </p>
        <p>
          Варим на своём зерне, держим тридцать сиропов и большие чайники — такие, чтобы хватило
          на всю компанию до конца партии.
        </p>
      </Reveal>
    </Container>
  </section>
);

export default About;
