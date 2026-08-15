/**
 * Фотографии интерьера лежат в `public/assets/photos/`, а не в бандле:
 * их можно заменить в любой момент, не пересобирая проект.
 * Хелпер собирает путь с учётом PUBLIC_URL (важно при деплое в подпапку).
 * Список ожидаемых файлов — в public/assets/photos/README.md.
 */
export const PHOTOS_DIR = `${process.env.PUBLIC_URL}/assets/photos`;

export const photo = (file: string): string => `${PHOTOS_DIR}/${file}`;
