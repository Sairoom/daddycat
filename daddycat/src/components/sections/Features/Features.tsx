import Container from '../../ui/Container/Container';
import Reveal from '../../ui/Reveal/Reveal';
import FeatureCard from '../../cards/FeatureCard/FeatureCard';
import { features } from '../../../data/info';
import './Features.scss';

const Features = () => (
  <section className="features">
    <Container>
      <Reveal>
        <ul className="features__grid">
          {features.map((feature, index) => (
            <li key={feature.id}>
              <FeatureCard feature={feature} index={index} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Container>
  </section>
);

export default Features;
