import Container from '../../components/ui/Container/Container';
import Button from '../../components/ui/Button/Button';
import logo from '../../assets/images/logo.svg';
import './NotFoundPage.scss';

const NotFoundPage = () => (
  <Container className="not-found">
    <img src={logo} alt="" className="not-found__logo" />
    <h1 className="not-found__code">404</h1>
    <p className="not-found__text">
      Кот утащил эту страницу под диван. Зато на кухне ещё есть кофе.
    </p>
    <Button to="/">Вернуться на главную</Button>
  </Container>
);

export default NotFoundPage;
