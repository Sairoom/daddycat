import { useEffect, useState } from 'react';
import logo from '../../../assets/images/logo.svg';
import './Photo.scss';

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  /** Подпись поверх снимка при наведении */
  caption?: string;
  /** Снимок в первом экране: грузим сразу, а не лениво */
  priority?: boolean;
}

/**
 * Фото интерьера с латунной заглушкой: если файла ещё нет
 * в public/assets/photos, вёрстка не рушится.
 */
const Photo = ({ src, alt, className = '', caption, priority = false }: PhotoProps) => {
  const [failed, setFailed] = useState(false);

  // Новый путь — снова пробуем загрузить, а не показываем заглушку навсегда.
  useEffect(() => setFailed(false), [src]);

  return (
    <figure className={`photo ${failed ? 'photo--empty' : ''} ${className}`.trim()}>
      {failed ? (
        <div className="photo__placeholder">
          <img src={logo} alt="" className="photo__placeholder-logo" />
          <span>{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="photo__img"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
        />
      )}
      {caption && <figcaption className="photo__caption">{caption}</figcaption>}
    </figure>
  );
};

export default Photo;
