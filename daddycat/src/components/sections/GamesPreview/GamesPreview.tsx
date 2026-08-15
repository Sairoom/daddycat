import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Button from '../../ui/Button/Button';
import Reveal from '../../ui/Reveal/Reveal';
import GameCard from '../../cards/GameCard/GameCard';
import { games } from '../../../data/games';
import './GamesPreview.scss';

const GamesPreview = () => (
  <section className="games-preview">
    <Container>
      <SectionTitle
        kicker="настолки"
        title="Полка, ради которой приходят"
        text="Игры бесплатны для гостей с заказом. Правила объясним, ведущего на «Мафию» дадим своего."
      />

      <Reveal>
        <ul className="games-preview__grid">
          {games.slice(0, 3).map((game) => (
            <li key={game.id}>
              <GameCard game={game} />
            </li>
          ))}
        </ul>
      </Reveal>

      <Button to="/games" variant="ghost" className="games-preview__more">
        Вся полка
      </Button>
    </Container>
  </section>
);

export default GamesPreview;
