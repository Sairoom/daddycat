import { MenuItem } from '../../../data/menu';
import './MenuCard.scss';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const single = item.variants.length === 1;

  return (
    <article className="menu-card">
      <div className="menu-card__head">
        <h3 className="menu-card__name">
          {item.name}
          {item.tag && <span className="menu-card__tag">{item.tag}</span>}
        </h3>
        <span className="menu-card__dots" aria-hidden="true" />
        {/* У позиции с единственным объёмом цена стоит в строке с названием */}
        {single && <span className="menu-card__price">{item.variants[0].price} ₽</span>}
      </div>

      {item.description && <p className="menu-card__desc">{item.description}</p>}

      {!single && (
        <ul className="menu-card__variants">
          {item.variants.map((variant) => (
            <li key={variant.volume ?? variant.price}>
              <span className="menu-card__volume">{variant.volume}</span>
              <span className="menu-card__price">{variant.price} ₽</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default MenuCard;
