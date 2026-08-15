export interface Game {
  id: string;
  title: string;
  players: string;
  duration: string;
  category: 'Компания' | 'Стратегия' | 'На вечер' | 'Быстрая';
  description: string;
}

export const games: Game[] = [
  {
    id: 'mafia',
    title: 'Мафия',
    players: '8–16 игроков',
    duration: '60–90 мин',
    category: 'Компания',
    description: 'Классика больших вечеров. Ведущего можем дать своего.',
  },
  {
    id: 'evolution',
    title: 'Эволюция',
    players: '2–8 игроков',
    duration: '40–60 мин',
    category: 'Стратегия',
    description: 'Подарочное издание: свойства, хищники и вечная нехватка еды.',
  },
  {
    id: 'bunker',
    title: 'Бункер',
    players: '4–16 игроков',
    duration: '40 мин',
    category: 'Компания',
    description: 'Спор о том, кто достоин места. Обычно самый громкий стол.',
  },
  {
    id: 'tram',
    title: 'Трамвай в смерти',
    players: '3–6 игроков',
    duration: '30 мин',
    category: 'Быстрая',
    description: 'Чёрный юмор и короткие партии между чашками кофе.',
  },
  {
    id: 'monopoly',
    title: 'Монополия',
    players: '2–6 игроков',
    duration: '90+ мин',
    category: 'На вечер',
    description: 'Та самая. Дружбу проверяли — держится.',
  },
  {
    id: 'cluedo',
    title: 'Клуэдо',
    players: '3–6 игроков',
    duration: '45 мин',
    category: 'Стратегия',
    description: 'Дедукция, блокнот и уверенность, что это был полковник.',
  },
  {
    id: 'unicorns',
    title: 'Неудержимые единороги',
    players: '2–8 игроков',
    duration: '30 мин',
    category: 'Быстрая',
    description: 'Милота, которая заканчивается предательством.',
  },
  {
    id: 'ecivilization',
    title: 'Экивоки',
    players: '4–16 игроков',
    duration: '60 мин',
    category: 'Компания',
    description: 'Рисуем, лепим, объясняем — и смеёмся весь зал.',
  },
];

export const gameCategories = ['Все', 'Компания', 'Стратегия', 'На вечер', 'Быстрая'] as const;
export type GameFilter = (typeof gameCategories)[number];
