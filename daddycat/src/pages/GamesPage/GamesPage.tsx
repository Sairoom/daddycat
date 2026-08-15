import { useMemo, useState } from 'react';
import PageHero from '../../components/sections/PageHero/PageHero';
import Container from '../../components/ui/Container/Container';
import Reveal from '../../components/ui/Reveal/Reveal';
import GameCard from '../../components/cards/GameCard/GameCard';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import { games, gameCategories, GameFilter } from '../../data/games';
import './GamesPage.scss';

const GamesPage = () => {
  const [filter, setFilter] = useState<GameFilter>('Все');

  const visible = useMemo(
    () => (filter === 'Все' ? games : games.filter((game) => game.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        kicker="настолки"
        title="Полка настольных игр"
        text="Больше шестидесяти коробок в зале. Здесь — те, которые разбирают чаще всего."
      />

      <Container className="games-page">
        <div className="games-page__filters">
          {gameCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              className={`games-page__filter ${
                filter === category ? 'games-page__filter--active' : ''
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <Reveal>
          <ul className="games-page__grid">
            {visible.map((game) => (
              <li key={game.id}>
                <GameCard game={game} />
              </li>
            ))}
          </ul>
        </Reveal>

        <aside className="games-page__note">
          <h2>Как это работает</h2>
          <ul>
            <li>Игры бесплатны для гостей с заказом — берите любую с полки.</li>
            <li>Не знаете правила? Бариста объяснит и раздаст первые карты.</li>
            <li>Большой компанией приходите пораньше: под «Мафию» нужен длинный стол.</li>
            <li>Ищете конкретную игру — напишите нам, скажем, свободна ли она.</li>
          </ul>
        </aside>
      </Container>

      <CtaBanner
        title="Соберём вам компанию"
        text="По средам ведём «Мафию», по пятницам — квиз. Приходите одни, уйдёте с командой."
      />
    </>
  );
};

export default GamesPage;
