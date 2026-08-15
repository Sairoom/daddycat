import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import GamesPage from './pages/GamesPage/GamesPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="games" element={<GamesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
