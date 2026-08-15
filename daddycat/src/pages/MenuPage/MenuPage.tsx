import PageHero from '../../components/sections/PageHero/PageHero';
import Container from '../../components/ui/Container/Container';
import Reveal from '../../components/ui/Reveal/Reveal';
import MenuCard from '../../components/cards/MenuCard/MenuCard';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import { menu } from '../../data/menu';
import './MenuPage.scss';

const MenuPage = () => (
  <>
    <PageHero
      kicker="меню"
      title="Кофе, чай и всё к ним"
      text="Зерно свежей обжарки, авторские напитки и десерты, которые удобно есть между ходами."
    />

    <Container className="menu-page">
      <nav className="menu-page__anchors">
        {menu.map((category) => (
          <a key={category.id} href={`#${category.id}`}>
            {category.title}
          </a>
        ))}
      </nav>

      {menu.map((category) => (
        <section key={category.id} id={category.id} className="menu-page__section">
          <header className="menu-page__head">
            <h2>{category.title}</h2>
            <p>{category.subtitle}</p>
          </header>

          <Reveal className="menu-page__grid">
            {category.items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </Reveal>
        </section>
      ))}
    </Container>

    <CtaBanner
      title="Кофе с собой тоже есть"
      text="Заберите стакан по дороге или останьтесь на партию — второй вариант мы любим больше."
    />
  </>
);

export default MenuPage;
