import { ReactNode } from 'react';
import './SectionTitle.scss';

interface SectionTitleProps {
  kicker?: string;
  title: ReactNode;
  text?: ReactNode;
}

const SectionTitle = ({ kicker, title, text }: SectionTitleProps) => (
  <header className="section-title">
    {kicker && <span className="section-title__kicker">{kicker}</span>}
    <h2 className="section-title__heading">{title}</h2>
    {text && <p className="section-title__text">{text}</p>}
  </header>
);

export default SectionTitle;
