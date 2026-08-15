import { useState } from 'react';
import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Button from '../../ui/Button/Button';
import Reveal from '../../ui/Reveal/Reveal';
import MenuCard from '../../cards/MenuCard/MenuCard';
import { menu } from '../../../data/menu';
import './MenuPreview.scss';

const MenuPreview = () => {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section className="menu-preview">
      <Container>
        <div className="menu-preview__head">
          <SectionTitle kicker="меню" title="Что налить" />

          <ul className="menu-preview__tabs">
            {menu.map((cat) => (
              <li key={cat.id}>
                <button
                  type="button"
                  aria-pressed={cat.id === active}
                  className={`menu-preview__tab ${
                    cat.id === active ? 'menu-preview__tab--active' : ''
                  }`}
                  onClick={() => setActive(cat.id)}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="menu-preview__list">
          {category.items.slice(0, 6).map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </Reveal>

        <Button to="/menu" variant="ghost" className="menu-preview__more">
          Всё меню
        </Button>
      </Container>
    </section>
  );
};

export default MenuPreview;
