import { useEffect } from 'react';

const SUFFIX = 'Daddy Cat Coffee';

const titles: Record<string, string> = {
  '/': 'Кофейня и настольные игры',
  '/menu': 'Меню',
  '/games': 'Настольные игры',
  '/gallery': 'Интерьер',
  '/contacts': 'Контакты и бронь',
};

/**
 * Заголовок вкладки под конкретный маршрут: в SPA он иначе остаётся
 * одинаковым во всей истории браузера и в закладках.
 */
export function useDocumentTitle(pathname: string) {
  useEffect(() => {
    const title = titles[pathname] ?? 'Страница не найдена';
    document.title = `${SUFFIX} — ${title}`;
  }, [pathname]);
}
