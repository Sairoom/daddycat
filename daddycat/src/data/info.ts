export const cafe = {
  name: 'Daddy Cat',
  fullName: 'Daddy Cat Coffee',
  tagline: 'Кофейня-антикафе в стимпанк-декорациях',
  address: 'ул. 8 Марта, 18, корп. 1',
  city: 'Москва',
  phone: '+7 (977) 424-78-32',
  phoneHref: '+79774247832',
  email: 'hello@daddycat.coffee',
  hours: [
    { days: 'Пн — Чт', time: '09:00 — 23:00' },
    { days: 'Пт — Сб', time: '09:00 — 01:00' },
    { days: 'Вс', time: '10:00 — 23:00' },
  ],
  socials: [
    { id: 'tg', label: 'Telegram', href: 'https://t.me/' },
    { id: 'vk', label: 'ВКонтакте', href: 'https://vk.com/' },
    { id: 'inst', label: 'Instagram', href: 'https://instagram.com/' },
  ],
};

export interface Feature {
  id: string;
  title: string;
  text: string;
}

export const features: Feature[] = [
  {
    id: 'games',
    title: 'Шестьдесят коробок на полке',
    text: 'От «Мафии» до «Эволюции». Правила объясним, ведущего на большой стол дадим.',
  },
  {
    id: 'coffee',
    title: 'Кофе на своём зерне',
    text: 'Две группы Nuova Simonelli и тридцать сиропов на полке над баром.',
  },
  {
    id: 'hall',
    title: 'Зал под вашу компанию',
    text: 'Проектор, длинные столы и розетки. По праздникам сдаём целиком.',
  },
];

export interface EventItem {
  id: string;
  day: string;
  title: string;
  time: string;
  text: string;
}

export const events: EventItem[] = [
  { id: 'mafia', day: 'Среда', title: 'Вечер «Мафии»', time: '19:00', text: 'Собираем два стола, ведущий наш.' },
  { id: 'quiz', day: 'Пятница', title: 'Квиз в зале', time: '20:00', text: 'Команды до шести человек, вход свободный.' },
  { id: 'cinema', day: 'Воскресенье', title: 'Киновечер', time: '18:00', text: 'Проектор, плед и какао с маршмеллоу.' },
];
