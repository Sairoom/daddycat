import { useEffect, useRef } from 'react';

/**
 * Плавное появление блока при попадании в зону видимости.
 * Возвращает ref, который нужно повесить на элемент с классом `reveal`.
 */
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.style.transitionDelay = `${delay}ms`;
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      // threshold: 0 принципиально: с долей 0.15 блок выше экрана
      // (длинный список меню) мог не набрать нужный процент и остаться скрытым.
      { threshold: 0, rootMargin: '0px 0px -80px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
