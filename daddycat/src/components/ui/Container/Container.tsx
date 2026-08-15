import { ReactNode } from 'react';
import './Container.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`container ${className}`.trim()}>{children}</div>
);

export default Container;
