import PageHero from '../../components/sections/PageHero/PageHero';
import Container from '../../components/ui/Container/Container';
import Reveal from '../../components/ui/Reveal/Reveal';
import Photo from '../../components/ui/Photo/Photo';
import { photo } from '../../assets/photos';
import { cafe } from '../../data/info';
import './ContactsPage.scss';

const ContactsPage = () => (
  <>
    <PageHero
      kicker="контакты"
      title="Как нас найти"
      text="Столы мы не бронируем — просто приходите. Вход со стороны улицы, ищите янтарную вывеску с котом."
    />

    <Container className="contacts">
      <Reveal className="contacts__info">
        <div className="contacts__block">
          <h2>Адрес</h2>
          <p>
            {cafe.city}, {cafe.address}
          </p>
          <p className="contacts__hint">
            Первый этаж, вход с улицы. Рядом остановка и парковка во дворе.
          </p>
        </div>

        <div className="contacts__block">
          <h2>Часы работы</h2>
          <ul className="contacts__rows">
            {cafe.hours.map((row) => (
              <li key={row.days}>
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
          <p className="contacts__hint">
            Кухня и бар работают до последнего гостя, последний заказ — за полчаса до закрытия.
          </p>
        </div>

        <div className="contacts__block">
          <h2>Связаться</h2>
          <p>
            <a href={`tel:${cafe.phoneHref}`}>{cafe.phone}</a>
          </p>
          <p>
            <a href={`mailto:${cafe.email}`}>{cafe.email}</a>
          </p>
          <p className="contacts__socials">
            {cafe.socials.map((social) => (
              <a key={social.id} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </p>
          <p className="contacts__hint">
            Позвоните, если хотите занять зал целиком под день рождения или корпоратив — это
            единственное, о чём договариваемся заранее.
          </p>
        </div>

      </Reveal>

      <Reveal className="contacts__aside" delay={150}>
        <Photo
          src={photo('neon.jpg')}
          alt="Вывеска Daddy Cat Coffee у входа в зал"
          className="contacts__photo"
        />
      </Reveal>
    </Container>
  </>
);

export default ContactsPage;
