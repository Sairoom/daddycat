import { Feature } from '../../../data/info';
import './FeatureCard.scss';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => (
  <article className="feature-card">
    <span className="feature-card__num">{String(index + 1).padStart(2, '0')}</span>
    <h3 className="feature-card__title">{feature.title}</h3>
    <p className="feature-card__text">{feature.text}</p>
  </article>
);

export default FeatureCard;
