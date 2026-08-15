import { Link } from 'react-router-dom';
import Container from '../../ui/Container/Container';
import logo from '../../../assets/images/logo.svg';
import { cafe } from '../../../data/info';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <Container className="footer__inner">
      <div className="footer__brand">
        <img src={logo} alt="" className="footer__logo" />
        <p>
          {cafe.city}, {cafe.address}
          <br />
          <a href={`tel:${cafe.phoneHref}`}>{cafe.phone}</a>
        </p>
      </div>

      <div className="footer__col">
        <h3>Часы работы</h3>
        <ul className="footer__hours">
          {cafe.hours.map((row) => (
            <li key={row.days}>
              <span>{row.days}</span>
              <span>{row.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <nav className="footer__col">
        <h3>Разделы</h3>
        <ul>
          <li>
            <Link to="/menu">Меню</Link>
          </li>
          <li>
            <Link to="/games">Настолки</Link>
          </li>
          <li>
            <Link to="/gallery">Интерьер</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>

      <div className="footer__col">
        <h3>Мы в сети</h3>
        <ul>
          {cafe.socials.map((social) => (
            <li key={social.id}>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>

    <Container className="footer__bottom">
      <span>
        © {new Date().getFullYear()} {cafe.fullName}
      </span>
      <a href={`mailto:${cafe.email}`}>{cafe.email}</a>
    </Container>
  </footer>
);

export default Footer;
