import { Game } from '../../../data/games';
import './GameCard.scss';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => (
  <article className="game-card">
    <h3 className="game-card__title">{game.title}</h3>
    <p className="game-card__meta">
      {game.players} · {game.duration}
    </p>
    <p className="game-card__text">{game.description}</p>
  </article>
);

export default GameCard;
