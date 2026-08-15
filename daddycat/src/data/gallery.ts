import { photo } from '../assets/photos';

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  /** Крупная плитка в мозаике */
  wide?: boolean;
  tall?: boolean;
}

// Файлы лежат в public/assets/photos — подменяются без пересборки.
export const gallery: GalleryPhoto[] = [
  { id: 'hall', src: photo('hall.jpg'), caption: 'Основной зал: неон, велюр и экран для киновечеров', wide: true },
  { id: 'bar', src: photo('bar.jpg'), caption: 'Бар: горчичная стена и полка с сиропами', tall: true },
  { id: 'chesterfield', src: photo('chesterfield.jpg'), caption: 'Кожаный честерфилд под часами с шестерёнками' },
  { id: 'window', src: photo('window.jpg'), caption: 'Столик у окна с полкой настолок' },
  { id: 'steampunk-wall', src: photo('steampunk-wall.jpg'), caption: 'Стена стимпанка: медные трубы и чумной доктор', tall: true },
  { id: 'neon', src: photo('neon.jpg'), caption: 'Вывеска Daddy Cat Coffee' },
  { id: 'shelf', src: photo('shelf.jpg'), caption: 'Полка «Счастье есть!»' },
  { id: 'lounge', src: photo('lounge.jpg'), caption: 'Мягкая зона у холодильника', wide: true },
];
