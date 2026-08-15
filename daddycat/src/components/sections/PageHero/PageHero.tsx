import { ReactNode } from 'react';
import Container from '../../ui/Container/Container';
import './PageHero.scss';

interface PageHeroProps {
  kicker?: string;
  title: string;
  text?: ReactNode;
}

const PageHero = ({ kicker, title, text }: PageHeroProps) => (
  <section className="page-hero">
    <Container>
      {kicker && <span className="page-hero__kicker">{kicker}</span>}
      <h1 className="page-hero__title">{title}</h1>
      {text && <p className="page-hero__text">{text}</p>}
    </Container>
  </section>
);

export default PageHero;
