import { ReactNode } from 'react';
import { useReveal } from '../../../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}

const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) => {
  const ref = useReveal<HTMLElement>(delay);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
};

export default Reveal;
