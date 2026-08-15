import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '../../ui/Container/Container';
import logo from '../../../assets/images/logo.svg';
import { cafe } from '../../../data/info';
import './Header.scss';

const links = [
  { to: '/', label: 'Главная' },
  { to: '/menu', label: 'Меню' },
  { to: '/games', label: 'Настолки' },
  { to: '/gallery', label: 'Интерьер' },
  { to: '/contacts', label: 'Контакты' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Меню закрывается при переходе на другую страницу
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Если экран расширился до десктопа, мобильное меню больше не показывается —
  // без этого блокировка скролла осталась бы висеть на body.
  useEffect(() => {
    const media = window.matchMedia('(min-width: 861px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  // Esc закрывает меню
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <Container className="header__inner">
        <Link to="/" className="header__brand" aria-label={cafe.fullName}>
          <img src={logo} alt="" className="header__logo" />
          <span className="header__name">
            <strong>Daddy Cat</strong>
            <em>coffee &amp; games</em>
          </span>
        </Link>

        <nav className="header__nav" id="main-nav">
          <ul className="header__list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `header__link ${isActive ? 'header__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* В мобильном меню телефон и адрес заменяют строку контактов из шапки */}
          <div className="header__nav-contacts">
            <a href={`tel:${cafe.phoneHref}`}>{cafe.phone}</a>
            <span>
              {cafe.city}, {cafe.address}
            </span>
          </div>
        </nav>

        <div className="header__actions">
          <a href={`tel:${cafe.phoneHref}`} className="header__phone">
            {cafe.phone}
          </a>
          <button
            type="button"
            className="header__burger"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
