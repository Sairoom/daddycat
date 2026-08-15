/** Одна и та же позиция в разных объёмах — вместо дублей в списке. */
export interface MenuVariant {
  /** Объём порции, например «350 мл». У допов его нет. */
  volume?: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  variants: MenuVariant[];
  tag?: 'хит' | 'новинка' | 'сезон';
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'classic',
    title: 'Классика',
    subtitle: 'Зерно свежей обжарки, две группы Nuova Simonelli',
    items: [
      {
        id: 'espresso',
        name: 'Двойной эспрессо',
        description: 'Плотный, с шоколадным послевкусием',
        variants: [{ volume: '60 мл', price: 120 }],
      },
      {
        id: 'americano',
        name: 'Американо',
        description: 'Эспрессо и горячая вода',
        variants: [
          { volume: '250 мл', price: 180 },
          { volume: '350 мл', price: 220 },
          { volume: '450 мл', price: 250 },
        ],
      },
      {
        id: 'cappuccino',
        name: 'Капучино',
        description: 'Бархатное молоко и рисунок на пенке',
        tag: 'хит',
        variants: [
          { volume: '250 мл', price: 200 },
          { volume: '350 мл', price: 240 },
          { volume: '450 мл', price: 280 },
          { volume: '600 мл', price: 320 },
        ],
      },
      {
        id: 'latte',
        name: 'Латте',
        description: 'Мягкий, с сиропом на выбор',
        variants: [
          { volume: '250 мл', price: 200 },
          { volume: '350 мл', price: 240 },
          { volume: '450 мл', price: 280 },
          { volume: '600 мл', price: 320 },
        ],
      },
      {
        id: 'flat-white',
        name: 'Флэт-уайт',
        description: 'Двойной эспрессо и минимум пены',
        variants: [
          { volume: '250 мл', price: 240 },
          { volume: '350 мл', price: 280 },
          { volume: '450 мл', price: 310 },
        ],
      },
      {
        id: 'raf',
        name: 'Раф',
        description: 'Сливки, ваниль и мягкая сладость',
        tag: 'хит',
        variants: [
          { volume: '250 мл', price: 240 },
          { volume: '350 мл', price: 280 },
          { volume: '450 мл', price: 310 },
          { volume: '600 мл', price: 360 },
        ],
      },
      {
        id: 'mocco',
        name: 'Мокко',
        description: 'Кофе, молоко и тёмный шоколад',
        variants: [
          { volume: '250 мл', price: 250 },
          { volume: '350 мл', price: 280 },
          { volume: '450 мл', price: 300 },
        ],
      },
      {
        id: 'cocoa',
        name: 'Какао',
        description: 'На молоке, с маршмеллоу по желанию',
        variants: [
          { volume: '250 мл', price: 200 },
          { volume: '350 мл', price: 240 },
          { volume: '450 мл', price: 280 },
        ],
      },
      {
        id: 'matcha',
        name: 'Матча',
        description: 'Церемониальная, на молоке',
        variants: [
          { volume: '250 мл', price: 200 },
          { volume: '350 мл', price: 240 },
          { volume: '450 мл', price: 280 },
        ],
      },
      {
        id: 'chocolate',
        name: 'Шоколад',
        description: 'Густой, почти как десерт',
        variants: [
          { volume: '250 мл', price: 230 },
          { volume: '350 мл', price: 260 },
          { volume: '450 мл', price: 290 },
        ],
      },
      {
        id: 'tea-pot',
        name: 'Чай',
        description: 'Чёрный, зелёный или травяной — чайник на компанию',
        variants: [
          { volume: '350 мл', price: 140 },
          { volume: '450 мл', price: 160 },
          { volume: '600 мл', price: 190 },
        ],
      },
      {
        id: 'babychino',
        name: 'Бэйби чино',
        description: 'Тёплое молоко с пенкой — для самых маленьких гостей',
        variants: [
          { volume: '150 мл', price: 120 },
          { volume: '250 мл', price: 150 },
        ],
      },
    ],
  },
  {
    id: 'author',
    title: 'Авторское меню',
    subtitle: 'То, что придумали сами — и чего нет по соседству',
    items: [
      {
        id: 'cappuccino-snickers',
        name: 'Капучино сникерс',
        description: 'Арахис, карамель и молочный шоколад',
        tag: 'хит',
        variants: [
          { volume: '350 мл', price: 350 },
          { volume: '450 мл', price: 420 },
        ],
      },
      {
        id: 'raf-halva',
        name: 'Раф халва',
        description: 'Подсолнечная халва и сливки',
        variants: [
          { volume: '350 мл', price: 350 },
          { volume: '450 мл', price: 420 },
        ],
      },
      {
        id: 'raf-cheese',
        name: 'Сырный раф',
        description: 'Сливочный сыр и щепотка соли',
        variants: [
          { volume: '350 мл', price: 350 },
          { volume: '450 мл', price: 420 },
        ],
      },
      {
        id: 'raf-banana',
        name: 'Банановый раф',
        description: 'Спелый банан и сливки',
        variants: [
          { volume: '350 мл', price: 350 },
          { volume: '450 мл', price: 420 },
        ],
      },
      {
        id: 'raf-rum',
        name: 'Раф бархатный ром',
        description: 'Ромовый сироп без алкоголя, ваниль',
        variants: [
          { volume: '350 мл', price: 350 },
          { volume: '450 мл', price: 420 },
        ],
      },
      {
        id: 'mint-cloud',
        name: 'Мятное облако',
        description: 'Латте с мятой и белым шоколадом',
        tag: 'новинка',
        variants: [
          { volume: '350 мл', price: 350 },
          { volume: '420 мл', price: 450 },
        ],
      },
      {
        id: 'bumble-orange',
        name: 'Бамбл апельсиновый',
        description: 'Эспрессо, лёд и свежий апельсин',
        variants: [
          { volume: '450 мл', price: 300 },
          { volume: '600 мл', price: 360 },
        ],
      },
      {
        id: 'bumble-cherry',
        name: 'Бамбл вишнёвый',
        description: 'Эспрессо, лёд и вишня',
        variants: [
          { volume: '450 мл', price: 300 },
          { volume: '600 мл', price: 360 },
        ],
      },
      {
        id: 'bumble-pomegranate',
        name: 'Бамбл гранатовый',
        description: 'Эспрессо, лёд и гранат',
        variants: [
          { volume: '450 мл', price: 300 },
          { volume: '600 мл', price: 360 },
        ],
      },
    ],
  },
  {
    id: 'tea',
    title: 'Чаи',
    subtitle: 'Чайники, которых хватает до конца партии',
    items: [
      {
        id: 'tea-seabuckthorn',
        name: 'Облепиховый чай',
        description: 'С имбирём и мёдом',
        tag: 'сезон',
        variants: [
          { volume: '350 мл', price: 300 },
          { volume: '450 мл', price: 350 },
        ],
      },
      {
        id: 'tea-raspberry',
        name: 'Малиновый чай',
        description: 'Малина и мята',
        variants: [
          { volume: '350 мл', price: 300 },
          { volume: '450 мл', price: 350 },
        ],
      },
      {
        id: 'tea-ginger',
        name: 'Имбирный чай',
        description: 'Имбирь, лимон, мёд',
        variants: [
          { volume: '350 мл', price: 300 },
          { volume: '450 мл', price: 350 },
        ],
      },
      {
        id: 'tea-lemon',
        name: 'Лимонный чай',
        description: 'Цитрус и пряности',
        variants: [
          { volume: '350 мл', price: 300 },
          { volume: '450 мл', price: 350 },
        ],
      },
    ],
  },
  {
    id: 'special',
    title: 'Особое',
    subtitle: 'Согревающее зимой и холодное летом',
    items: [
      {
        id: 'spicy-tea-latte',
        name: 'Пряный чай латте',
        description: 'Чёрный чай, молоко и специи',
        variants: [
          { volume: '350 мл', price: 310 },
          { volume: '450 мл', price: 360 },
        ],
      },
      {
        id: 'mulled-wine',
        name: 'Глинтвейн б/а',
        description: 'Без алкоголя: виноград, апельсин, гвоздика',
        tag: 'сезон',
        variants: [
          { volume: '350 мл', price: 310 },
          { volume: '450 мл', price: 360 },
        ],
      },
      {
        id: 'espresso-tonic',
        name: 'Эспрессо тоник',
        description: 'Тоник, лайм и двойной шот',
        variants: [
          { volume: '400 мл', price: 300 },
          { volume: '500 мл', price: 360 },
        ],
      },
    ],
  },
  {
    id: 'extras',
    title: 'Допы',
    subtitle: 'Собрать напиток под себя',
    items: [
      {
        id: 'extra-shot',
        name: 'Дополнительный шот',
        variants: [{ price: 40 }],
      },
      {
        id: 'decaf',
        name: 'Декаф',
        description: 'Кофе без кофеина',
        variants: [{ price: 70 }],
      },
      {
        id: 'alt-milk',
        name: 'Альтернативное молоко',
        description: 'Фундук, банан, кокос, миндаль, кокос-банан, овсяное, безлактозное',
        variants: [
          { volume: '250 мл', price: 30 },
          { volume: '350 мл', price: 45 },
          { volume: '450 мл', price: 60 },
          { volume: '600 мл', price: 80 },
        ],
      },
      {
        id: 'syrup',
        name: 'Сироп',
        description: 'Огромный выбор вкусов на полке над баром',
        variants: [{ price: 50 }],
      },
    ],
  },
];
