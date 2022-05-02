import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div id="App">
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
